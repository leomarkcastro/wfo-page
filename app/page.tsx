'use client';

import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  router.replace('/admin/dashboard');

  return <p>Hello</p>;
}
