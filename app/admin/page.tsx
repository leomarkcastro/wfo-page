'use client';

import DashboardContent from './dashboard-content';

export default function DashboardPage() {
  // const { data, loading } = useSubscription(Ping_time);
  // return (
  //   <div className='flex flex-1 flex-col p-4'>
  //     <h1>Welcome to WFO</h1>
  //     <p>{loading ? 'is Loading' : ''}</p>
  //     <p>Time: {data?.ping_time?.iso}</p>
  //   </div>
  // );

  return <DashboardContent />;
}
