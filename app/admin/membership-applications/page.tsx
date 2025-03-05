'use client';

import { DataProviderTable } from '@/components/custom/quick-table';
import { MembershipApplicationsDataProvider } from '@/lib/dataProviders/membershipApplications';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function MembershipApplicationsPage() {
  const router = useRouter();
  return (
    <div>
      <DataProviderTable
        name='Membership Applications'
        enableUrlPersistence={true}
        onRowClick={(row) => {
          router.push(`/admin/membership-applications/edit/${row.id}`);
        }}
        actionButtons={
          <div className=''>
            <Link href='/admin/membership-applications/add'>
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
            key: 'email',
            label: 'Email',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'phoneNumber',
            label: 'Phone Number',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'country',
            label: 'Country',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'applicationDate',
            label: 'Application Date',
            sortable: true,
            renderCell(value) {
              return moment(Number(value)).format('MM/DD/YYYY');
            },
          },
          {
            key: 'status',
            label: 'Status',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value) {
              let statusClass = '';
              switch (value) {
                case 'Pending':
                  statusClass = 'bg-yellow-100 text-yellow-800';
                  break;
                case 'Approved':
                  statusClass = 'bg-green-100 text-green-800';
                  break;
                case 'Rejected':
                  statusClass = 'bg-red-100 text-red-800';
                  break;
                default:
                  statusClass = 'bg-gray-100 text-gray-800';
              }
              return (
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${statusClass}`}
                >
                  {value}
                </span>
              );
            },
          },
          {
            key: 'memberType',
            label: 'Member Type',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
        ]}
        dataSource={MembershipApplicationsDataProvider}
      />
    </div>
  );
}
