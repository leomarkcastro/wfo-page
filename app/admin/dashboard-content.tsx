'use client';

import { MoreHorizontal, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/custom/card';
import { StackedBar } from '@/components/charts/StackedBar';
import { BarChartMultiple } from '@/components/charts/BarChartMultiple';
import { useFunction } from '@/lib/hooks/useFunction';
import { MembersDataProvider } from '@/lib/dataProviders/members';
import { ServicePurchaseDataProvider } from '@/lib/dataProviders/servicePurchase';
import chroma from 'chroma-js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DashboardContent() {
  return (
    <div className='flex-1 space-y-8'>
      <MetricsCards />

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <UniqueCountriesCount />
        <MemberTypeCount />

        <BarChartMultiple
          labels={{
            title: 'Earnings - Sample',
            description: 'January - June 2024',
            footer: (
              <>
                <div className='flex gap-2 font-medium leading-none'>
                  Trending up by 5.2% this month{' '}
                  <TrendingUp className='h-4 w-4' />
                </div>
                <div className='leading-none text-muted-foreground'>
                  Showing total visitors for the last 6 months
                </div>
              </>
            ),
          }}
          chartConfig={{
            desktop: {
              label: 'Desktop',
              color: 'hsl(var(--chart-1))',
            },
            mobile: {
              label: 'Mobile',
              color: 'hsl(var(--chart-2))',
            },
          }}
          data={[
            { month: 'January', desktop: 186, mobile: 80 },
            { month: 'February', desktop: 305, mobile: 200 },
            { month: 'March', desktop: 237, mobile: 120 },
            { month: 'April', desktop: 73, mobile: 190 },
            { month: 'May', desktop: 209, mobile: 130 },
            { month: 'June', desktop: 214, mobile: 140 },
          ]}
          dataKeys={['desktop', 'mobile']}
          xAxisKey='month'
          style={{ height: '300' }}
        />
      </div>

      {/* <div className='grid gap-6 md:grid-cols-2'>
        <TransactionList />

      </div> */}

      {/* <QuickList
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
      /> */}
      {/* <DataProviderTable
        columns={[
          {
            key: 'name',
            label: 'Name',
            sortable: true,
            filterable: ['contains', 'equals'],
          },
          { key: 'address', label: 'Address' },
          {
            key: 'id',
            label: 'Age',
            sortable: true,
            filterable: ['equals', 'lt', 'lte', 'gt', 'gte'],
          },
        ]}
        dataSource={SampleDataProvider}
      /> */}
    </div>
  );
}

function MetricsCards() {
  const { ppData: totalCount, loading: totalLoading } = useFunction(
    async () => {
      return MembersDataProvider.getList({
        filters: [],
        pagination: {
          page: 1,
          perPage: 1,
        },
        search: '',
        sorters: [],
      });
    },
    {
      autoLoad: true,
      postProcess(data) {
        return data.total.toString();
      },
    },
  );

  const { ppData: subscribedCount, loading: subscribedLoading } = useFunction(
    async () => {
      return MembersDataProvider.getList({
        filters: [
          {
            field: 'expirationDate',
            operator: 'gte',
            value: new Date().toISOString(),
          },
        ],
        pagination: {
          page: 1,
          perPage: 1,
        },
        search: '',
        sorters: [],
      });
    },
    {
      autoLoad: true,
      postProcess(data) {
        return data.total.toString();
      },
    },
  );

  if (totalLoading || subscribedLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      <MetricCard title='Total Members' value={totalCount} />

      <MetricCard
        title='Subscribed Members'
        value={subscribedCount}
        change={`${((parseInt(subscribedCount) / parseInt(totalCount)) * 100).toFixed(2)}% of total`}
        trend={
          (parseInt(subscribedCount) / parseInt(totalCount)) * 100 > 50
            ? 'up'
            : 'down'
        }
      />

      <ServicePurchaseRevenue />
    </div>
  );
}

function ServicePurchaseRevenue() {
  const { ppData: currentRevenue, loading: currentLoading } = useFunction(
    () => {
      const previousMonth = new Date();
      return ServicePurchaseDataProvider.aggregate({
        countBy: ['total'],
        operation: '_sum',
        filters: [],
      });
    },
    {
      autoLoad: true,
      postProcess(data) {
        const total = data.breakdown[0]?.count || 0;
        return `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
      },
    },
  );

  if (currentLoading) {
    return <MetricCard title='Service Purchase Revenue' value='Loading...' />;
  }

  return <MetricCard title='Service Purchase Revenue' value={currentRevenue} />;
}

function UniqueCountriesCount() {
  // const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const { ppData, loading } = useFunction(
    () => {
      return MembersDataProvider.groupBy({
        filters: [
          {
            field: 'expirationDate',
            operator: 'gte',
            value: new Date().toISOString(),
          },
        ],
        groupBy: ['home_country'],
        countBy: ['email'],
        operation: '_count',
      });
    },
    {
      autoLoad: true,
      deps: [expanded],
      postProcess(data) {
        let dataCopy = JSON.parse(JSON.stringify(data));
        // sort the data
        dataCopy.breakdown.sort((a, b) => {
          let aCount = a.counts?.[0]?.count || 0;
          let bCount = b.counts?.[0]?.count || 0;
          return bCount - aCount;
        });
        let toShowLength = expanded ? dataCopy.breakdown.length : 10;
        let toShow = dataCopy.breakdown.slice(0, toShowLength);
        const scaleColors = chroma
          .scale(['maroon', 'pink'])
          .mode('lch')
          .colors(dataCopy.breakdown.length + 4);
        return toShow.map((item) => {
          try {
            const labelData = JSON.parse(item.uniqueIdentifier);
            return {
              country: labelData.home_country || 'Unspecified',
              members: item.counts[0].count,
              fill: scaleColors[toShow.indexOf(item)],
            };
          } catch (e) {
            return {
              country: item.uniqueIdentifier,
              members: item.counts[0].count,
              fill: scaleColors[toShow.indexOf(item)],
            };
          }
        });
      },
    },
  );

  return (
    <div className={`relative transition-all duration-300`}>
      <StackedBar
        labels={{
          title: 'Members by Country',
          description: (
            <div className='flex items-center justify-between'>
              <span>{expanded ? 'All countries' : 'Top 10 countries'}</span>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Show Less' : 'Show All'}
              </Button>
            </div>
          ),
          xAxes: 'members',
          yAxes: 'country',
          footer: (
            <div className='leading-none text-muted-foreground'>
              You can press the bars to have a filtered list of members under
              that country
            </div>
          ),
        }}
        chartConfig={{
          visitors: {
            label: 'Members',
          },
        }}
        data={ppData}
        onBarClick={(data) => {
          let filterState = encodeURIComponent(
            JSON.stringify({
              home_country: [{ value: data.country, operator: 'equals' }],
            }),
          );
          window.open(`/admin/members?Members_filters=${filterState}`);
        }}
        isLoading={loading}
        style={{
          height: expanded ? '800px' : '300px',
        }}
      />
    </div>
  );
}

function MemberTypeCount() {
  const router = useRouter();
  const { ppData, loading } = useFunction(
    () => {
      return MembersDataProvider.groupBy({
        filters: [
          {
            field: 'expirationDate',
            operator: 'gte',
            value: new Date().toISOString(),
          },
        ],
        groupBy: ['memberType'],
        countBy: ['email'],
        operation: '_count',
      });
    },
    {
      autoLoad: true,
      postProcess(data) {
        let dataCopy = JSON.parse(JSON.stringify(data));
        dataCopy.breakdown.sort((a, b) => {
          let aCount = a.counts?.[0]?.count || 0;
          let bCount = b.counts?.[0]?.count || 0;
          return bCount - aCount;
        });
        const scaleColors = chroma
          .scale(['orange', 'pink'])
          .mode('lch')
          .colors(dataCopy.breakdown.length + 2);

        return dataCopy.breakdown.map((item) => {
          try {
            const labelData = JSON.parse(item.uniqueIdentifier);
            return {
              type: labelData.memberType || 'Unspecified',
              members: item.counts[0].count,
              fill: scaleColors[dataCopy.breakdown.indexOf(item)],
            };
          } catch (e) {
            return {
              type: item.uniqueIdentifier || 'Unspecified',
              members: item.counts[0].count,
              fill: scaleColors[dataCopy.breakdown.indexOf(item)],
            };
          }
        });
      },
    },
  );

  return (
    <StackedBar
      labels={{
        title: 'Members by Type',
        description: 'Distribution of member types',
        xAxes: 'members',
        yAxes: 'type',
        footer: (
          <div className='leading-none text-muted-foreground'>
            Click on bars to see members of specific type
          </div>
        ),
      }}
      chartConfig={{
        visitors: {
          label: 'Members',
        },
      }}
      data={ppData}
      onBarClick={(data) => {
        let filterState = encodeURIComponent(
          JSON.stringify({
            memberType: [{ value: data.type, operator: 'equals' }],
          }),
        );
        window.open(`/admin/members?Members_filters=${filterState}`);
      }}
      isLoading={loading}
    />
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
  change?: string;
  trend?: 'up' | 'down';
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
        <span className='text-2xl font-bold'>{value}</span>
        {trend && change && (
          <span
            className={`ml-2 rounded-xl p-1 px-2 pb-1.5 text-xs ${trend === 'up' ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}
          >
            {change}
          </span>
        )}
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
            <div className='flex flex-1 items-center gap-3'>
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
