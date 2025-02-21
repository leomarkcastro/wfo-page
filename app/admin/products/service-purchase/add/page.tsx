'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { ServicePurchaseDataProvider } from '@/lib/dataProviders/servicePurchase';

export default function ServicePurchaseAdd() {
  return (
    <ResourceForm
      mode='create'
      title='New Service Purchase'
      subtitle='Add new service purchase'
      dataProvider={ServicePurchaseDataProvider}
      returnPath='/admin/products?tab=servicePurchase'
      gridCols={3}
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
          row: 2,
          cell: 1,
        },
        {
          type: 'number',
          name: 'balanceDue',
          label: 'Balance Due',
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
