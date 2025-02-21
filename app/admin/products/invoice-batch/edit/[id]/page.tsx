'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { InvoiceBatchDataProvider } from '@/lib/dataProviders/invoiceBatch';

export default function InvoiceBatchEdit() {
  return (
    <ResourceForm
      mode='edit'
      title='Edit Invoice Batch'
      subtitle='Edit invoice batch details'
      dataProvider={InvoiceBatchDataProvider}
      dontReturnOnSubmit
      gridCols={2}
      returnPath='/admin/products?tab=invoiceBatch'
      fields={[
        {
          type: 'text',
          name: 'customer',
          label: 'Customer',
          required: true,
          row: 1,
          cell: 1,
        },
        {
          type: 'text',
          name: 'batchID',
          label: 'Batch ID',
          required: true,
          row: 1,
          cell: 1,
        },
        {
          type: 'checkbox',
          name: 'isOpen',
          label: 'Is Open',
          before: <span className='text-sm text-gray-500'>Is Open</span>,
          row: 2,
          cell: 1,
        },
      ]}
    />
  );
}
