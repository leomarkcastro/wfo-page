'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchParams, useRouter } from 'next/navigation';
import PagePath from '../(mainlayout)/path';
import TabServicePurchase from './TabServicePurchase';
import TabProductFulfillment from './TabProductFulfillment';
import TabInvoiceBatch from './TabInvoiceBatch';

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'servicePurchase';

  const handleTabChange = (value: string) => {
    let searchParams = new URLSearchParams(window.location.search);
    const params = new URLSearchParams(searchParams);
    params.set('tab', value);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <PagePath id='products' title='Products' />
      <Tabs
        defaultValue={currentTab}
        className='w-full'
        onValueChange={handleTabChange}
      >
        <TabsList>
          <TabsTrigger value='servicePurchase'>Service Purchase</TabsTrigger>
          <TabsTrigger value='productFulfillment'>
            Product Fulfillment
          </TabsTrigger>
          <TabsTrigger value='invoiceBatch'>Invoice Batch</TabsTrigger>
        </TabsList>
        <TabsContent value='servicePurchase'>
          <TabServicePurchase />
        </TabsContent>
        <TabsContent value='productFulfillment'>
          <TabProductFulfillment />
        </TabsContent>
        <TabsContent value='invoiceBatch'>
          <TabInvoiceBatch />
        </TabsContent>
      </Tabs>
    </>
  );
}
