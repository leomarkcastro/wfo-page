'use client';

import {
  LayoutGrid,
  Users,
  Settings,
  ListCheck,
  Calendar,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { create } from 'zustand';
import Image from 'next/image';

export const pathLocation = create<{
  pathID: string;
  setPathID: (path: string) => void;
}>((set) => ({
  pathID: 'dash',
  setPathID: (path: string) => set({ pathID: path }),
}));

interface AppMenuItem {
  id: string;
  title: string;
  url: string;
  icon: any;
  badge?: string;
}

// Menu items
const menuItems: AppMenuItem[] = [
  { title: 'Overview', url: '/admin', icon: LayoutGrid, id: 'dash' },
  { title: 'Members', url: '/admin/members', icon: Users, id: 'members' },
  {
    title: 'Subscriptions',
    url: '/admin/subscriptions',
    icon: ListCheck,
    id: 'subscriptions',
  },
  { title: 'Calendar', url: '/admin/calendar', icon: Calendar, id: 'calendar' },
];

const generalItems: AppMenuItem[] = [
  { title: 'Settings', url: '/settings', icon: Settings, id: 'settings' },
];

export function AppSidebar() {
  const pathID = pathLocation((state) => state.pathID);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <Sidebar className='w-64 border-r border-none bg-primary text-primary-foreground'>
      <SidebarContent className='bg-primary text-primary-foreground'>
        <div className='p-6'>
          <h1 className='flex items-center gap-2 text-xl font-semibold'>
            <div className='relative -ml-1 aspect-[24/4] w-full'>
              <Image src='/text-logo-white.png' alt='logo' layout='fill' />
            </div>
          </h1>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className='mb-2 px-4 text-xs font-semibold tracking-tight'>
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-white/10 hover:text-white',
                        pathID === item.id && 'bg-white/10 text-white',
                      )}
                    >
                      <item.icon className='h-4 w-4' />
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className='ml-auto rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground'>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className='mb-2 mt-8 px-4 text-xs font-semibold tracking-tight'>
            GENERAL
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {generalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-white/10 hover:text-white'
                    >
                      <item.icon className='h-4 w-4' />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className='absolute bottom-4 flex w-56 items-center justify-between gap-4 px-4'>
        <div className='flex items-center gap-3'>
          <div className='h-8 w-8 rounded-full bg-secondary text-white' />
          <div className='flex flex-col text-primary-foreground'>
            <span className='text-sm font-medium'>Fandawa Pure</span>
            <span className='text-xs text-gray-400'>fandawa@siohioma.com</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className='text-gray-200 hover:text-white'
          title='Logout'
        >
          <LogOut className='h-4 w-4' />
        </button>
      </div>
    </Sidebar>
  );
}
