import { DataProviderTable } from '@/components/custom/quick-table';
import { Button } from '@/components/ui/button';
import { ProductFulfillmentDataProvider } from '@/lib/dataProviders/productFulfillment';
import { displayBoolean, formatMoney } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TabProductFulfillment() {
  const router = useRouter();

  return (
    <DataProviderTable
      name='Product Fulfillments'
      onRowClick={(row) => {
        router.push(`/admin/products/product-fulfillment/edit/${row.id}`);
      }}
      columns={[
        {
          key: 'product',
          label: 'Product',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'package',
          label: 'Package',
          sortable: true,
          filterable: ['contains', 'equals'],
        },
        {
          key: 'price',
          label: 'Price',
          sortable: true,
          filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
          renderCell: formatMoney,
        },
        {
          key: 'quantity',
          label: 'Quantity',
          sortable: true,
          filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
        },
        {
          key: 'total',
          label: 'Total',
          sortable: true,
          filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
          renderCell: formatMoney,
        },
        {
          key: 'balance',
          label: 'Balance',
          sortable: true,
          filterable: ['equals', 'gt', 'lt', 'gte', 'lte'],
          renderCell: formatMoney,
        },
        {
          key: 'shipped',
          label: 'Shipped',
          sortable: true,
          filterable: ['equals'],
          renderCell: displayBoolean,
        },
      ]}
      dataSource={ProductFulfillmentDataProvider}
      actionButtons={
        <div className=''>
          <Link href={`/admin/products/product-fulfillment/add`}>
            <Button>Add New</Button>
          </Link>
        </div>
      }
    />
  );
}
