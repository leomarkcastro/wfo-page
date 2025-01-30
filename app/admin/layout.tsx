'use client';

import SidebarLayout from '@/app/admin/(mainlayout)/layout';
import PagePath from './(mainlayout)/path';

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarLayout>
      <PagePath id='dash' title='Dashboard' />
      <div className='flex flex-1 flex-col p-4'>{children}</div>
    </SidebarLayout>
  );
}
