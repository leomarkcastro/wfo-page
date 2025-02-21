'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { ProductFulfillmentDataProvider } from '@/lib/dataProviders/productFulfillment';

export default function ProductFulfillmentAdd() {
  return (
    <ResourceForm
      mode='create'
      title='New Product Fulfillment'
      subtitle='Add new product fulfillment'
      dataProvider={ProductFulfillmentDataProvider}
      returnPath='/admin/products?tab=productFulfillment'
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
          type: 'text',
          name: 'package',
          label: 'Package',
          required: true,
          row: 1,
          cell: 1,
        },
        {
          type: 'number',
          name: 'price',
          label: 'Price',
          required: true,
          before: <span className='text-sm text-gray-500'>$</span>,

          row: 2,
          cell: 1,
        },
        {
          type: 'number',
          name: 'quantity',
          label: 'Quantity',
          required: true,
          row: 2,
          cell: 1,
        },
        {
          type: 'display',
          name: 'total',
          label: 'Total',
          row: 2,
          cell: 1,
        },
        {
          type: 'number',
          name: 'balance',
          label: 'Balance',
          required: true,
          row: 3,
          cell: 1,
        },
        {
          type: 'checkbox',
          name: 'shipped',
          label: 'Shipped',
          row: 4,
          cell: 1,
        },
        {
          type: 'textarea',
          name: 'note',
          label: 'Note',
          row: 5,
          cell: 3,
          rows: 4,
        },
      ]}
    />
  );
}
