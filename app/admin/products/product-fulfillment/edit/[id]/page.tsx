'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { ProductFulfillmentDataProvider } from '@/lib/dataProviders/productFulfillment';
import { formatMoney } from '@/lib/utils';

export default function ProductFulfillmentEdit() {
  return (
    <ResourceForm
      mode='edit'
      title='Edit Product Fulfillment'
      subtitle='Edit product fulfillment details'
      dataProvider={ProductFulfillmentDataProvider}
      dontReturnOnSubmit
      returnPath='/admin/products?tab=productFulfillment'
      gridCols={3}
      onForm={(form) => {
        form.watch((formValues, { name, type }) => {
          if (name === 'quantity' || name === 'price') {
            const total = formValues.quantity * formValues.price;
            form.setValue('total', total, { shouldValidate: true });
          }
        });
      }}
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
          required: true,
          component: (form) => (
            <span className='p-1'>{formatMoney(form.watch('total'))}</span>
          ),
          row: 2,
          cell: 1,
        },
        {
          type: 'number',
          name: 'balance',
          label: 'Balance',
          before: <span className='text-sm text-gray-500'>$</span>,

          required: true,
          row: 3,
          cell: 1,
        },
        {
          type: 'checkbox',
          name: 'shipped',
          label: 'Shipped',
          before: (
            <span className='ml-0 text-sm text-gray-500'>Is Shipped</span>
          ),
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
