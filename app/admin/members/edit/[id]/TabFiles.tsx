import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { FilesDataProvider } from '@/lib/dataProviders/files';
import { fMoment } from '@/lib/services/fMoment';
import { formatBytes } from '@/lib/utils';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function TabFiles() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  return (
    <DataProviderTable
      name='Files'
      onRowClick={(row) => {
        router.push(`/admin/files/edit/${row.id}?assignedTo=${id}`);
      }}
      initialFilters={{
        assignedTo: [
          {
            operator: 'equals',
            value: id as string,
          },
        ],
      }}
      columns={[
        {
          key: 'name',
          label: 'Filename',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'category',
          label: 'Category',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'mime',
          label: 'Type',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'size',
          label: 'Size',
          renderCell(value) {
            return formatBytes(value);
          },
          sortable: true,
        },
        {
          key: 'createdAt',
          label: 'Uploaded At',
          renderCell(value) {
            return fMoment(value)?.format('MM/DD/YYYY hh:mm A');
          },
          sortable: true,
          filterable: ['contains', 'equals', 'gt', 'lt', 'gte', 'lte'],
        },
      ]}
      dataSource={FilesDataProvider}
      actionButtons={
        <div className=''>
          <Link href={`/admin/files/add?assignedTo=${id}`}>
            <Button>Upload File</Button>
          </Link>
        </div>
      }
    />
  );
}
