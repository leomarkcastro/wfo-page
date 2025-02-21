import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { ServicePurchaseDataProvider } from '@/lib/dataProviders/servicePurchase';
import { fMoment } from '@/lib/services/fMoment';
import { displayBoolean, formatMoney } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TabServicePurchase() {
  const router = useRouter();

  return (
    <DataProviderTable
      name='Service Purchases'
      onRowClick={(row) => {
        router.push(`/admin/products/service-purchase/edit/${row.id}`);
      }}
      columns={[
        {
          key: 'product',
          label: 'Product',
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
          key: 'total',
          label: 'Total',
          sortable: true,
          filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
          renderCell: formatMoney,
        },
        {
          key: 'balanceDue',
          label: 'Balance Due',
          sortable: true,
          filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
          renderCell: formatMoney,
        },
        {
          key: 'cancelled',
          label: 'Cancelled',
          sortable: true,
          filterable: ['equals'],
          renderCell: displayBoolean,
        },
        {
          key: 'createdAt',
          label: 'Created At',
          renderCell(value) {
            return fMoment(value).format('MM/DD/YYYY hh:mm A');
          },
          sortable: true,
          filterable: ['contains', 'equals', 'gt', 'lt', 'gte', 'lte'],
        },
      ]}
      dataSource={ServicePurchaseDataProvider}
      actionButtons={
        <div className=''>
          <Link href={`/admin/products/service-purchase/add`}>
            <Button>Add New</Button>
          </Link>
        </div>
      }
    />
  );
}
