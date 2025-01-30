'use client';
import { useEffect } from 'react';
import { pathLocation } from '../(mainlayout)/app-sidebar';
import { usePathname } from 'next/navigation';
import { pathTitle } from './header';

export default function PagePath(props: { id: string; title?: string }) {
  const router = usePathname();
  const setPath = pathLocation((state) => state.setPathID);
  const setPathTitle = pathTitle((state) => state.setPathName);
  useEffect(() => {
    setPath(props.id);
    if (props.title) {
      setPathTitle(props.title);
    }
  }, [router]);
  return <></>;
}
