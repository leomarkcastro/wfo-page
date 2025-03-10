'use client';

import PagePath from '../../(mainlayout)/path';
import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { ProductsDataProvider } from '@/lib/dataProviders/products';
import { formatMoney } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter();

  return (
    <>
      <PagePath id='products' title='Products' />
      <DataProviderTable
        name='Products'
        onRowClick={(row) => {
          router.push(`/admin/products/products/edit/${row.id}`);
        }}
        columns={[
          {
            key: 'photo',
            label: 'Photo',
            sortable: false,
            renderCell: (value) => (
              <div className='h-12 w-12 overflow-hidden rounded-md'>
                <img
                  src={value}
                  alt='Product'
                  className='h-full w-full object-cover'
                />
              </div>
            ),
          },
          {
            key: 'name',
            label: 'Name',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'price',
            label: 'Price',
            sortable: true,
            filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
            renderCell: formatMoney,
          },
          {
            key: 'description',
            label: 'Description',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'note',
            label: 'Note',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
        ]}
        dataSource={ProductsDataProvider}
        actionButtons={
          <div className=''>
            <Link href={`/admin/products/products/add`}>
              <Button>Add New</Button>
            </Link>
          </div>
        }
      />
    </>
  );
}
