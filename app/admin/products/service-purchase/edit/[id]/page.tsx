'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { ServicePurchaseDataProvider } from '@/lib/dataProviders/servicePurchase';

export default function ServicePurchaseEdit() {
  return (
    <ResourceForm
      mode='edit'
      title='Edit Service Purchase'
      subtitle='Edit service purchase details'
      dataProvider={ServicePurchaseDataProvider}
      dontReturnOnSubmit
      gridCols={3}
      returnPath='/admin/products?tab=servicePurchase'
      fields={[
        {
          type: 'text',
          name: 'product',
          label: 'Product',
          required: true,
          row: 1,
          cell: 2,
        },
        {
          type: 'select',
          name: 'type',
          label: 'Type',
          required: true,
          allowCustom: true,
          options: [
            { label: 'Purchase', value: 'Purchase' },
            { label: 'Subscription', value: 'Subscription' },
          ],
          row: 1,
          cell: 1,
        },
        {
          type: 'number',
          name: 'total',
          label: 'Total',
          required: true,
          before: <span className='text-sm text-gray-500'>$</span>,
          row: 2,
          cell: 1,
        },
        {
          type: 'number',
          name: 'balanceDue',
          label: 'Balance Due',
          before: <span className='text-sm text-gray-500'>$</span>,
          required: true,
          row: 2,
          cell: 1,
        },
        {
          type: 'checkbox',
          name: 'cancelled',
          label: 'Cancelled',
          row: 2,
          before: <span className='text-sm text-gray-500'>Is Cancelled</span>,
          cell: 1,
        },
        {
          type: 'textarea',
          name: 'note',
          label: 'Note',
          row: 3,
          cell: 3,
          rows: 4,
        },
      ]}
    />
  );
}
