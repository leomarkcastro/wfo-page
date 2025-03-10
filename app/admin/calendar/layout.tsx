'use client';
import PagePath from '../(mainlayout)/path';

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PagePath id='calendar' title='Calendar View' />
      {children}
    </>
  );
}
