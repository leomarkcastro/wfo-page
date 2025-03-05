'use client';

import { DataProviderTable } from '@/components/custom/quick-table';
import { EventsDataProvider } from '@/lib/dataProviders/events';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EventsPage() {
  const router = useRouter();
  return (
    <div>
      <DataProviderTable
        name='Events'
        enableUrlPersistence={true}
        onRowClick={(row) => {
          router.push(`/admin/events/edit/${row.id}`);
        }}
        actionButtons={
          <div className=''>
            <Link href='/admin/events/add'>
              <Button>Add New Event</Button>
            </Link>
          </div>
        }
        columns={[
          {
            key: 'title',
            label: 'Title',
            sortable: true,
            filterable: ['contains', 'equals'],
            renderCell(value, row) {
              return (
                <span
                  className={
                    row.isCancelled ? 'text-muted-foreground line-through' : ''
                  }
                >
                  {value}
                </span>
              );
            },
          },
          {
            key: 'description',
            label: 'Description',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'startDate',
            label: 'Start Date',
            sortable: true,
            specialType: 'datetime',
            renderCell(value) {
              return moment(Number(value)).format('MM/DD/YYYY hh:mm A');
            },
          },
          {
            key: 'endDate',
            label: 'End Date',
            sortable: true,
            specialType: 'datetime',
            renderCell(value) {
              return moment(Number(value)).format('MM/DD/YYYY hh:mm A');
            },
          },
          {
            key: 'location',
            label: 'Location',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'isCancelled',
            label: 'Cancelled',
            sortable: true,
            filterable: ['equals'],
            renderCell(value) {
              return value ? (
                <span className='font-medium text-red-500'>Yes</span>
              ) : (
                <span className='font-medium text-green-500'>No</span>
              );
            },
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
        ]}
        dataSource={EventsDataProvider}
      />
    </div>
  );
}
