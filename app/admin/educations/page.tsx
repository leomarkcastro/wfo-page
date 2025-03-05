'use client';

import { DataProviderTable } from '@/components/custom/quick-table';
import { EducationDataProvider } from '@/lib/dataProviders/education';
import { useRouter } from 'next/navigation';
import { fMoment } from '@/lib/services/fMoment';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EducationsPage() {
  const router = useRouter();
  return (
    <div>
      <DataProviderTable
        name='Educations'
        enableUrlPersistence={true}
        onRowClick={(row) => {
          router.push(`/admin/educations/edit/${row.id}`);
        }}
        actionButtons={
          <div className=''>
            <Link href='/admin/educations/add'>
              <Button>Add New Education</Button>
            </Link>
          </div>
        }
        columns={[
          {
            key: 'schoolName',
            label: 'School Name',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'achievement',
            label: 'Achievement',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'dateOfAchievement',
            label: 'Date of Achievement',
            sortable: true,
            specialType: 'datetime',
            renderCell(value) {
              return fMoment(value).format('MM/DD/YYYY hh:mm A');
            },
          },
          {
            key: 'userName',
            label: 'User Name',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          {
            key: 'createdAt',
            label: 'Created At',
            sortable: true,
            specialType: 'datetime',
            renderCell(value) {
              return fMoment(value).format('MM/DD/YYYY hh:mm A');
            },
          },
        ]}
        dataSource={EducationDataProvider}
      />
    </div>
  );
}
