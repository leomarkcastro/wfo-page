import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { EducationDataProvider } from '@/lib/dataProviders/education';
import moment from 'moment';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function TabEduc() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  return (
    <DataProviderTable
      name='Educations'
      onRowClick={(row) => {
        // console.log(row);
        router.push(`/admin/educations/edit/${row.id}?userId=${id}`);
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
          renderCell(value) {
            return moment(Number(value)).format('MM/DD/YYYY hh:mm A');
          },
          sortable: true,
          filterable: ['contains', 'equals', 'gt', 'lt', 'gte', 'lte'],
        },
      ]}
      dataSource={EducationDataProvider}
      actionButtons={
        <div className=''>
          <Link href={`/admin/educations/add?userId=${id}`}>
            <Button>Add New</Button>
          </Link>
        </div>
      }
    />
  );
}
