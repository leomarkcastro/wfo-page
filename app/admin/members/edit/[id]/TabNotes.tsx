import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { NotesDataProvider } from '@/lib/dataProviders/notes';
import { fMoment } from '@/lib/services/fMoment';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function TabNotes() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  return (
    <DataProviderTable
      name='Notes'
      onRowClick={(row) => {
        router.push(`/admin/notes/edit/${row.id}?userId=${id}`);
      }}
      initialFilters={{
        userId: [
          {
            operator: 'equals',
            value: id as string,
          },
        ],
      }}
      columns={[
        {
          key: 'title',
          label: 'Title',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'type',
          label: 'Type',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'content',
          label: 'Content',
          sortable: true,
          filterable: ['contains', 'equals'],
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
      ]}
      dataSource={NotesDataProvider}
      actionButtons={
        <div className=''>
          <Link href={`/admin/notes/add?userId=${id}`}>
            <Button>Add New</Button>
          </Link>
        </div>
      }
    />
  );
}
