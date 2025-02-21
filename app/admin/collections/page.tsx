'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchParams, useRouter } from 'next/navigation';
import PagePath from '../(mainlayout)/path';
import TabNotes from './TabNotes';
import TabFiles from './TabFiles';

export default function MemberEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'notes';

  const handleTabChange = (value: string) => {
    let searchParams = new URLSearchParams(window.location.search);
    const params = new URLSearchParams(searchParams);
    params.set('tab', value);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <PagePath id='collections' title='Collections' />
      <Tabs
        defaultValue={currentTab}
        className='w-full'
        onValueChange={handleTabChange}
      >
        <TabsList>
          <TabsTrigger value='notes'>Notes</TabsTrigger>
          <TabsTrigger value='files'>Files</TabsTrigger>
        </TabsList>
        <TabsContent value='notes'>
          <TabNotes />
        </TabsContent>
        <TabsContent value='files'>
          <TabFiles />
        </TabsContent>
      </Tabs>
    </>
  );
}
