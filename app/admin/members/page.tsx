'use client';

import { DataProviderTable } from '@/components/custom/quick-table';
import { SampleDataProvider } from '@/lib/dataProviders/sample';

export default function DashboardPage() {
  return (
    <div>
      <DataProviderTable
        onRowClick={(row) => {
          console.log(row);
        }}
        columns={[
          {
            key: 'name',
            label: 'Name',
            sortable: true,
            filterable: ['contains', 'eq'],
          },
          { key: 'address', label: 'Address' },
          {
            key: 'id',
            label: 'Age',
            sortable: true,
            filterable: ['eq', 'lt', 'lte', 'gt', 'gte'],
          },
        ]}
        dataSource={SampleDataProvider}
      />
    </div>
  );
}
