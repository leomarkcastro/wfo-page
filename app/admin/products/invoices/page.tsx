'use client';

import PagePath from '../../(mainlayout)/path';
import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { InvoiceDataProvider } from '@/lib/dataProviders/invoice';
import { fMoment } from '@/lib/services/fMoment';
import { formatMoney } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function InvoicesPage() {
  const router = useRouter();

  return (
    <>
      <PagePath id='invoices' title='Invoices' />
      <DataProviderTable
        name='Invoices'
        onRowClick={(row) => {
          router.push(`/admin/products/invoices/edit/${row.id}`);
        }}
        columns={[
          {
            key: 'customerName',
            label: 'Customer',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'items',
            label: 'Products',
            renderCell: (value) => {
              return value.map((item) => item.name).join(', ');
            },
            filterable: ['contains'],
          },
          {
            key: 'total',
            label: 'Total',
            sortable: true,
            filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
            renderCell: formatMoney,
          },
          {
            key: 'status',
            label: 'Status',
            sortable: true,
            filterable: ['equals'],
            renderCell: (value) => (
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  value === 'paid'
                    ? 'bg-green-100 text-green-800'
                    : value === 'pending' || value === 'draft'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                }`}
              >
                {value.toUpperCase()}
              </span>
            ),
          },
          {
            key: 'createdAt',
            label: 'Created At',
            renderCell(value) {
              return fMoment(value)?.format('MM/DD/YYYY hh:mm A');
            },
            sortable: true,
            filterable: ['contains', 'equals', 'gt', 'lt', 'gte', 'lte'],
          },
          {
            key: 'paidAt',
            label: 'Paid At',
            renderCell(value) {
              return value ? fMoment(value)?.format('MM/DD/YYYY hh:mm A') : '-';
            },
            sortable: true,
            filterable: ['contains', 'equals', 'gt', 'lt', 'gte', 'lte'],
          },
        ]}
        dataSource={InvoiceDataProvider}
        actionButtons={
          <div className=''>
            <Link href={`/admin/products/invoices/add`}>
              <Button>Add New</Button>
            </Link>
          </div>
        }
      />
    </>
  );
}
