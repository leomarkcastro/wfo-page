'use client';

import PagePath from '../../(mainlayout)/path';
import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { InvoiceBatchDataProvider } from '@/lib/dataProviders/invoiceBatch';
import { fMoment } from '@/lib/services/fMoment';
import { displayBoolean } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function InvoiceBatchPage() {
  const router = useRouter();

  return (
    <>
      <PagePath id='invoiceBatch' title='Invoice Batching' />
      <DataProviderTable
        name='Invoice Batches'
        onRowClick={(row) => {
          router.push(`/admin/products/invoice-batch/edit/${row.id}`);
        }}
        columns={[
          {
            key: 'customer',
            label: 'Customer',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'batchID',
            label: 'Batch ID',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'isOpen',
            label: 'Is Open',
            sortable: true,
            filterable: ['equals'],
            renderCell: displayBoolean,
          },
          {
            key: 'closedAt',
            label: 'Closed At',
            renderCell(value) {
              return value ? fMoment(value).format('MM/DD/YYYY hh:mm A') : '-';
            },
            sortable: true,
            filterable: ['contains', 'equals', 'gt', 'lt', 'gte', 'lte'],
          },
          {
            key: 'createdAt',
            label: 'Created At',
            renderCell(value) {
              return fMoment(value).format('MM/DD/YYYY hh:mm A');
            },
            sortable: true,
            filterable: ['contains', 'equals', 'gt', 'lt', 'gte', 'lte'],
          },
        ]}
        dataSource={InvoiceBatchDataProvider}
        actionButtons={
          <div className=''>
            <Link href={`/admin/products/invoice-batch/add`}>
              <Button>Add New</Button>
            </Link>
          </div>
        }
      />
    </>
  );
}
