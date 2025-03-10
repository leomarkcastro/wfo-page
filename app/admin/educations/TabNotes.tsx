import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { NotesDataProvider } from '@/lib/dataProviders/notes';
import { fMoment } from '@/lib/services/fMoment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TabNotes() {
  const router = useRouter();
  return (
    <DataProviderTable
      name='Education Notes'
      onRowClick={(row) => {
        router.push(`/admin/notes/edit/${row.id}?returnTo=educations`);
      }}
      initialFilters={{
        type: [
          {
            operator: 'equals',
            value: 'Education',
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
          <Link href={`/admin/notes/add?type=Education&returnTo=educations`}>
            <Button>Add New</Button>
          </Link>
        </div>
      }
    />
  );
}
