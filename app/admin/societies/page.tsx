'use client';

import { DataProviderTable } from '@/components/custom/quick-table';
import { SocietiesDataProvider } from '@/lib/dataProviders/societies';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SocietiesPage() {
  const router = useRouter();
  return (
    <div>
      <DataProviderTable
        name='Societies'
        enableUrlPersistence={true}
        onRowClick={(row) => {
          router.push(`/admin/societies/edit/${row.id}`);
        }}
        actionButtons={
          <div className=''>
            <Link href='/admin/societies/add'>
              <Button>Add New Society</Button>
            </Link>
          </div>
        }
        columns={[
          {
            key: 'name',
            label: 'Name',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'description',
            label: 'Description',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'address',
            label: 'Address',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'createdAt',
            label: 'Created At',
            sortable: true,
            specialType: 'datetime',
            renderCell(value) {
              return moment(Number(value)).format('MM/DD/YYYY hh:mm A');
            },
          },
          {
            key: 'updatedAt',
            label: 'Updated At',
            sortable: true,
            specialType: 'datetime',
            renderCell(value) {
              return moment(Number(value)).format('MM/DD/YYYY hh:mm A');
            },
          },
        ]}
        dataSource={SocietiesDataProvider}
      />
    </div>
  );
}
