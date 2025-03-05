'use client';
import { useEffect } from 'react';
import { pathTitle } from './header';

export default function PagePath(props: {
  id: string;
  title?: string;
  subtitle?: string;
}) {
  const setPathTitle = pathTitle((state) => state.setPathName);
  useEffect(() => {
    setPathTitle(props.title, props.subtitle);
  }, [props]);

  return <></>;
}
