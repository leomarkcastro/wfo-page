'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RefreshCw } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  passwordFormSchema,
  profileFormSchema,
} from '@/lib/validations/settings';
import { useToast } from '@/hooks/use-toast';

export default function SettingsPage() {
  const { user, updateMe, changePassword } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const profileForm = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user?.name || '',
      middleName: user?.middleName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
    },
  });

  const passwordForm = useForm({
    resolver: zodResolver(passwordFormSchema),
  });

  async function onProfileSubmit(data) {
    try {
      setIsLoading(true);
      await updateMe({
        id: user.id,
        ...data,
      });
      toast({
        title: 'Profile updated',
        description: 'Your profile has been updated successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onPasswordSubmit(data) {
    try {
      setIsLoading(true);
      await changePassword(data.currentPassword, data.newPassword);
      passwordForm.reset();
      toast({
        title: 'Password updated',
        description: 'Your password has been updated successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='container mx-auto py-6'>
      <h1 className='mb-6 text-3xl font-bold'>Settings</h1>

      <Tabs defaultValue='profile' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='profile'>Profile Settings</TabsTrigger>
          <TabsTrigger value='sync'>Member Sync</TabsTrigger>
        </TabsList>

        <TabsContent value='profile'>
          <div className='grid gap-6'>
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details here.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)}>
                  <div className='grid gap-4 md:grid-cols-3'>
                    <div className='space-y-2'>
                      <Label htmlFor='name'>First Name</Label>
                      <Input
                        {...profileForm.register('name')}
                        placeholder='Enter your first name'
                      />
                      {profileForm.formState.errors.name && (
                        <p className='text-sm text-red-500'>
                          {profileForm.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='middleName'>Middle Name</Label>
                      <Input
                        {...profileForm.register('middleName')}
                        placeholder='Enter your middle name'
                      />
                      {profileForm.formState.errors.middleName && (
                        <p className='text-sm text-red-500'>
                          {profileForm.formState.errors.middleName.message}
                        </p>
                      )}
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='lastName'>Last Name</Label>
                      <Input
                        {...profileForm.register('lastName')}
                        placeholder='Enter your last name'
                      />
                      {profileForm.formState.errors.lastName && (
                        <p className='text-sm text-red-500'>
                          {profileForm.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='mt-4'>
                    <div className='mb-4 text-sm text-muted-foreground'>
                      Member since:{' '}
                      {new Date(user?.createdAt).toLocaleDateString()}
                      {user?.lastLogin && (
                        <>
                          {' '}
                          · Last login:{' '}
                          {new Date(user.lastLogin).toLocaleString()}
                        </>
                      )}
                    </div>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      {...profileForm.register('email')}
                      type='email'
                      placeholder='Enter your email'
                      readOnly
                      className='cursor-not-allowed bg-gray-50'
                    />
                    {profileForm.formState.errors.email && (
                      <p className='text-sm text-red-500'>
                        {profileForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <Button type='submit' className='mt-4' disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password here.</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}>
                  <div className='space-y-2'>
                    <Label htmlFor='currentPassword'>Current Password</Label>
                    <Input
                      {...passwordForm.register('currentPassword')}
                      type='password'
                    />
                    {passwordForm.formState.errors.currentPassword && (
                      <p className='text-sm text-red-500'>
                        {passwordForm.formState.errors.currentPassword.message.toString()}
                      </p>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='newPassword'>New Password</Label>
                    <Input
                      {...passwordForm.register('newPassword')}
                      type='password'
                    />
                    {passwordForm.formState.errors.newPassword && (
                      <p className='text-sm text-red-500'>
                        {passwordForm.formState.errors.newPassword.message.toString()}
                      </p>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='confirmPassword'>
                      Confirm New Password
                    </Label>
                    <Input
                      {...passwordForm.register('confirmPassword')}
                      type='password'
                    />
                    {passwordForm.formState.errors.confirmPassword && (
                      <p className='text-sm text-red-500'>
                        {passwordForm.formState.errors.confirmPassword.message.toString()}
                      </p>
                    )}
                  </div>
                  <Button type='submit' className='mt-4' disabled={isLoading}>
                    {isLoading ? 'Updating...' : 'Update Password'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='sync'>
          <Card>
            <CardHeader>
              <CardTitle>Member List Synchronization</CardTitle>
              <CardDescription>
                Sync members between NetForum and WordPress platforms.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='rounded-lg border p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='text-lg font-medium'>NetForum Members</h3>
                    <p className='text-sm text-muted-foreground'>
                      Last synced: 2 hours ago
                    </p>
                  </div>
                  <Button variant='outline' className='space-x-2'>
                    <RefreshCw className='h-4 w-4' />
                    <span>Sync Now</span>
                  </Button>
                </div>
              </div>

              <Separator />

              <div className='rounded-lg border p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='text-lg font-medium'>WordPress Members</h3>
                    <p className='text-sm text-muted-foreground'>
                      Last synced: 2 hours ago
                    </p>
                  </div>
                  <Button variant='outline' className='space-x-2'>
                    <RefreshCw className='h-4 w-4' />
                    <span>Sync Now</span>
                  </Button>
                </div>
              </div>

              <div className='mt-6 flex justify-end space-x-4'>
                <Button variant='outline'>Cancel</Button>
                <Button>Sync All Members</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
