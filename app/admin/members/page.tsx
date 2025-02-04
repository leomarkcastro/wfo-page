'use client';

import { DataProviderTable } from '@/components/custom/quick-table';
import { MembersDataProvider } from '@/lib/dataProviders/members';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div>
      <DataProviderTable
        onRowClick={(row) => {
          // console.log(row);
          router.push(`/admin/members/edit/${row.id}`);
        }}
        columns={[
          {
            key: 'name',
            label: 'Name',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          { key: 'email', label: 'Email' },
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
