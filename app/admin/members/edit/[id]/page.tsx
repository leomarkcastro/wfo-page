'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchParams, useRouter } from 'next/navigation';
import TabMainEdit from './TabMainEdit';
import TabEduc from './TabEduc';

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
    <Tabs
      defaultValue={currentTab}
      className='w-full'
      onValueChange={handleTabChange}
    >
      <TabsList>
        <TabsTrigger value='account'>Main Account</TabsTrigger>
        <TabsTrigger value='education'>Education</TabsTrigger>
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
    </Tabs>
  );
}
