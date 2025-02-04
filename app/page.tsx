'use client';

import { useAuth } from '@/hooks/use-auth';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
