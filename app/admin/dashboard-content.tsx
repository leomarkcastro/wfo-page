'use client';

import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/custom/card';
import QuickList from '@/components/custom/quick-list';
import { DataProviderTable } from '@/components/custom/quick-table';
import { SampleDataProvider } from '@/lib/dataProviders/sample';

export default function DashboardContent() {
  return (
    <div className='flex-1 space-y-8'>
      {/* <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Dashboard</h1>
          <p className='text-sm text-muted-foreground'>
            An easy way to manage sales with care and precision.
          </p>
        </div>
        <Button variant='outline' className='gap-2'>
          January 2024 - May 2024
          <ChevronDown className='h-4 w-4' />
        </Button>
      </div> */}

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <div className='rounded-lg bg-primary p-6 text-primary-foreground'>
          <div className='mb-4'>
            <span className='text-xs'>Feb 12th 2024</span>
            <h3 className='mt-1 text-lg font-semibold'>
              Sales revenue increased
              <br />
              40% in 1 week
            </h3>
          </div>
          <Button variant='link' className='p-0 text-secondary'>
            See Statistics →
          </Button>
        </div>

        <MetricCard
          title='Net Income'
          value='193.000'
          change='+35%'
          trend='up'
        />

        <MetricCard
          title='Total Return'
          value='32.000'
          change='-24%'
          trend='down'
        />
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <TransactionList />
        <RevenueChart />
      </div>

      <SalesReport />
      <QuickList
        items={[
          {
            name: 'Product Launched',
            value: 65,
          },
        ]}
        renderItem={(item) => (
          <div className='mb-2 flex justify-between px-2 py-4 text-sm'>
            <span>{item.name}</span>
            <span>{item.value}</span>
          </div>
        )}
        menuOptions={[
          {
            label: 'View',
            action: () => console.log('View'),
          },
        ]}
      />
      <DataProviderTable
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

function MetricCard({
  title,
  value,
  change,
  trend,
}: {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}) {
  return (
    <Card className='p-6'>
      <div className='flex items-start justify-between'>
        <h3 className='text-sm font-medium'>{title}</h3>
        <Button variant='ghost' size='icon'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </div>
      <div className='mt-4'>
        <span className='text-2xl font-bold'>${value}</span>
        <span
          className={`ml-2 text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
        >
          {change} from last month
        </span>
      </div>
    </Card>
  );
}

function TransactionList() {
  const transactions = [
    {
      name: 'Premium T-Shirt',
      date: 'Jul 12th 2024',
      status: 'Completed',
      icon: '👕',
    },
    {
      name: 'PlayStation 5',
      date: 'Jul 12th 2024',
      status: 'Pending',
      icon: '🎮',
    },
    {
      name: 'Hoodie Gembong',
      date: 'Jul 12th 2024',
      status: 'Pending',
      icon: '🧥',
    },
    {
      name: 'iPhone 15 Pro Max',
      date: 'Jul 12th 2024',
      status: 'Completed',
      icon: '📱',
    },
  ];

  return (
    <Card>
      <CardHeader title='Transaction' />
      <div className='divide-y'>
        {transactions.map((transaction) => (
          <div
            key={transaction.name}
            className='flex items-center justify-between p-4'
          >
            <div className='flex items-center gap-3'>
              <span className='text-2xl'>{transaction.icon}</span>
              <div>
                <p className='font-medium'>{transaction.name}</p>
                <p className='text-sm text-muted-foreground'>
                  {transaction.date}
                </p>
              </div>
            </div>
            <span
              className={`rounded-full px-2.5 py-0.5 text-sm ${
                transaction.status === 'Completed'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {transaction.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function RevenueChart() {
  return (
    <Card>
      <CardHeader
        title='Revenue'
        action={
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-primary' />
              <span className='text-sm'>Income</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-secondary' />
              <span className='text-sm'>Expenses</span>
            </div>
          </div>
        }
      />
      <CardContent className='flex h-[200px] items-end gap-2'>
        {[60, 45, 55, 50, 60, 55, 45].map((height, i) => (
          <div key={i} className='flex flex-1 gap-1'>
            <div
              className='w-full rounded-t bg-primary'
              style={{ height: `${height}%` }}
            />
            <div
              className='w-full rounded-t bg-secondary'
              style={{ height: `${height - 20}%` }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SalesReport() {
  const products = [
    { name: 'Product Launched', value: 65, color: 'bg-secondary' },
    { name: 'Ongoing Product', value: 35, color: 'bg-secondary/70' },
    { name: 'Product Sold', value: 84, color: 'bg-secondary/40' },
  ];

  return (
    <Card>
      <CardHeader title='Sales Report' />
      <CardContent className='space-y-4'>
        {products.map((product) => (
          <div key={product.name}>
            <div className='mb-2 flex justify-between text-sm'>
              <span>{product.name}</span>
              <span>{product.value}</span>
            </div>
            <div className='h-2 rounded-full bg-gray-100'>
              <div
                className={`h-full rounded-full ${product.color}`}
                style={{ width: `${product.value}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
