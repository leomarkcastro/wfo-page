'use client';
import PagePath from '../(mainlayout)/path';

export default function SocietiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PagePath id='societies' title='Societies' />
      {children}
    </>
  );
}
