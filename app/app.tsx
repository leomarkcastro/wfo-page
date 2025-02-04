'use client';

import { ApolloWrapper } from '@/components/apollo';
import { AuthProvider } from '@/hooks/use-auth';
import { PermissionProvider } from '@/hooks/use-permission';
import { authBehavior } from '@/lib/authProvider';
import { permissionProvider } from '@/lib/permissionProvider';

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloWrapper>
      <AuthProvider behavior={authBehavior}>
        <PermissionProvider behavior={permissionProvider}>
          {children}
        </PermissionProvider>
      </AuthProvider>
    </ApolloWrapper>
  );
}
