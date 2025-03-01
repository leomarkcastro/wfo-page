'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { apolloClient } from '@/lib/apollo/ApolloClient';
import {
  Api_sync_crm_netforum,
  Api_sync_crm_wordpress,
} from '@/graphql/declarations/admin';
import { useFunction } from '@/lib/hooks/useFunction';
import { MembersDataProvider } from '@/lib/dataProviders/members';

type SyncOperation = {
  type: 'wordpressTo' | 'wordpressFrom' | 'netforumTo' | 'netforumFrom' | null;
  handler: (() => Promise<void>) | null;
};

export default function TabSync() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState({
    wordpressTo: false,
    wordpressFrom: false,
    netforumTo: false,
    netforumFrom: false,
  });
  const [pendingSync, setPendingSync] = useState<SyncOperation>({
    type: null,
    handler: null,
  });

  const { data, loading } = useFunction(
    async () => {
      const data = await MembersDataProvider.getOne({
        id: id as string,
      });

      return data.data;
    },
    {
      autoLoad: true,
      deps: [id],
    },
  );

  const handleWordPressSyncTo = async () => {
    setIsLoading((prev) => ({ ...prev, wordpressTo: true }));
    try {
      await apolloClient.mutate({
        mutation: Api_sync_crm_wordpress,
        variables: {
          input: {
            data: {
              destination: 'wordpress',
              email: data?.email,
            },
          },
        },
      });
      console.log('Sync TO WordPress for user:', id);
      await apolloClient.refetchQueries({
        include: ['api_member_get', 'api_member_list'],
      });
    } catch (error) {
      console.error('WordPress sync error:', error);
    } finally {
      setIsLoading((prev) => ({ ...prev, wordpressTo: false }));
    }
  };

  const handleWordPressSyncFrom = async () => {
    if (!data?.email) {
      return;
    }
    setIsLoading((prev) => ({ ...prev, wordpressFrom: true }));
    try {
      await apolloClient.mutate({
        mutation: Api_sync_crm_wordpress,
        variables: {
          input: {
            data: {
              destination: 'crm',
              email: data?.email,
            },
          },
        },
      });
      await apolloClient.refetchQueries({
        include: ['api_member_get', 'api_member_list'],
      });
    } catch (error) {
      console.error('WordPress sync error:', error);
    } finally {
      setIsLoading((prev) => ({ ...prev, wordpressFrom: false }));
    }
  };

  const handleNetForumSyncTo = async () => {
    setIsLoading((prev) => ({ ...prev, netforumTo: true }));
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Placeholder
      console.log('Sync TO NetForum for user:', id);
      await apolloClient.refetchQueries({
        include: ['api_member_get', 'api_member_list'],
      });
    } catch (error) {
      console.error('NetForum sync error:', error);
    } finally {
      setIsLoading((prev) => ({ ...prev, netforumTo: false }));
    }
  };

  const handleNetForumSyncFrom = async () => {
    setIsLoading((prev) => ({ ...prev, netforumFrom: true }));
    try {
      await apolloClient.mutate({
        mutation: Api_sync_crm_netforum,
        variables: {
          input: {
            data: {
              destination: 'crm',
              email: data?.email,
            },
          },
        },
      });
      await apolloClient.refetchQueries({
        include: ['api_member_get', 'api_member_list'],
      });
      console.log('Sync FROM NetForum for user:', id);
    } catch (error) {
      console.error('NetForum sync error:', error);
    } finally {
      setIsLoading((prev) => ({ ...prev, netforumFrom: false }));
    }
  };

  const handleSyncClick = (
    type: SyncOperation['type'],
    handler: () => Promise<void>,
  ) => {
    setPendingSync({ type, handler });
  };

  const handleConfirm = async () => {
    if (pendingSync.handler) {
      await pendingSync.handler();
    }
    setPendingSync({ type: null, handler: null });
  };

  const getSyncMessage = () => {
    switch (pendingSync.type) {
      case 'wordpressTo':
        return 'sync this user TO WordPress';
      case 'wordpressFrom':
        return 'sync this user FROM WordPress';
      case 'netforumTo':
        return 'sync this user TO NetForum';
      case 'netforumFrom':
        return 'sync this user FROM NetForum';
      default:
        return '';
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='space-y-4'>
      <Card>
        <CardHeader>
          <CardTitle>Member Details</CardTitle>
          <CardDescription>
            Sync data to and from data sources to maintain synchronization
            between them
          </CardDescription>
        </CardHeader>
        <CardContent>Email: {data?.email}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>WordPress Sync</CardTitle>
          <CardDescription>
            Synchronize user data with WordPress
          </CardDescription>
        </CardHeader>
        <CardContent className='space-x-4'>
          <Button
            onClick={() =>
              handleSyncClick('wordpressTo', handleWordPressSyncTo)
            }
            disabled={isLoading.wordpressTo}
          >
            {isLoading.wordpressTo ? 'Syncing...' : 'Sync to WordPress'}
          </Button>
          <Button
            onClick={() =>
              handleSyncClick('wordpressFrom', handleWordPressSyncFrom)
            }
            disabled={isLoading.wordpressFrom}
          >
            {isLoading.wordpressFrom ? 'Syncing...' : 'Sync from WordPress'}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>NetForum Sync</CardTitle>
          <CardDescription>Synchronize user data with NetForum</CardDescription>
        </CardHeader>
        <CardContent className='space-x-4'>
          <Button
            onClick={() => handleSyncClick('netforumTo', handleNetForumSyncTo)}
            disabled={isLoading.netforumTo}
          >
            {isLoading.netforumTo ? 'Syncing...' : 'Sync to NetForum'}
          </Button>
          <Button
            onClick={() =>
              handleSyncClick('netforumFrom', handleNetForumSyncFrom)
            }
            disabled={isLoading.netforumFrom}
          >
            {isLoading.netforumFrom ? 'Syncing...' : 'Sync from NetForum'}
          </Button>
        </CardContent>
      </Card>

      <AlertDialog
        open={pendingSync.type !== null}
        onOpenChange={() => setPendingSync({ type: null, handler: null })}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Sync</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {getSyncMessage()}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
