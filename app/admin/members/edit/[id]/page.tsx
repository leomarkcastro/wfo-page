'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchParams, useRouter } from 'next/navigation';
import TabMainEdit from './TabMainEdit';
import TabEduc from './TabEduc';
import TabSync from './TabSync';
import PagePath from '@/app/admin/(mainlayout)/path';
import TabEducPortal from './TabEducPortal';
import TabNotes from './TabNotes';
import TabFiles from './TabFiles';

export default function MemberEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'account';

  const handleTabChange = (value: string) => {
    let searchParams = new URLSearchParams(window.location.search);
    const params = new URLSearchParams(searchParams);
    params.set('tab', value);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <PagePath id='members' title='Edit Member' />
      <Tabs
        defaultValue={currentTab}
        className='w-full'
        onValueChange={handleTabChange}
      >
        <TabsList>
          <TabsTrigger value='account'>Main Account</TabsTrigger>
          <TabsTrigger value='education'>Education</TabsTrigger>
          <TabsTrigger value='notes'>Notes</TabsTrigger>
          <TabsTrigger value='files'>Files</TabsTrigger>
          <TabsTrigger value='educportal'>WP Educ Portal</TabsTrigger>
          <TabsTrigger value='sync'>Sync Options</TabsTrigger>
        </TabsList>
        <p className='p-1 text-xs text-gray-400'>
          Make sure to save your changes before changing tabs
        </p>
        <TabsContent value='account'>
          <TabMainEdit />
        </TabsContent>
        <TabsContent value='education'>
          <TabEduc />
        </TabsContent>
        <TabsContent value='notes'>
          <TabNotes />
        </TabsContent>
        <TabsContent value='files'>
          <TabFiles />
        </TabsContent>
        <TabsContent value='educportal'>
          <TabEducPortal />
        </TabsContent>
        <TabsContent value='sync'>
          <TabSync />
        </TabsContent>
      </Tabs>
    </>
  );
}
