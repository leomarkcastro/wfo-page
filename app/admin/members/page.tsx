'use client';

import { DataProviderTable } from '@/components/custom/quick-table';
import { MembersDataProvider } from '@/lib/dataProviders/members';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div>
      <DataProviderTable
        onRowClick={(row) => {
          // console.log(row);
          router.push(`/admin/members/edit/${row.id}`);
        }}
        actionButtons={
          <div className=''>
            <Link href='/admin/members/add'>
              <Button>Add New</Button>
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
            key: 'lastName',
            label: 'lastName',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'email',
            label: 'Email',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'home_state',
            label: 'State',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'home_country',
            label: 'Country',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'memberType',
            label: 'Member Type',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'createdAt',
            label: 'Created At',
            sortable: true,
            renderCell(value) {
              return moment(Number(value)).format('MM/DD/YYYY hh:mm A');
            },
          },
          // {
          //   key: 'id',
          //   label: 'Age',
          //   sortable: true,
          //   filterable: ['equals', 'lt', 'lte', 'gt', 'gte'],
          // },
        ]}
        dataSource={MembersDataProvider}
      />
    </div>
  );
}
