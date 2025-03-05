'use client';

import {
  LogOut,
  Users,
  LayoutGrid,
  DollarSign,
  Map,
  Settings,
  FileText,
  FileText as Logs,
  Calendar,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { BoxesIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { create } from 'zustand';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';
import { pathTitle } from './header';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export const pathLocation = create<{
  pathName: string;
  subPathName?: string;
  setPathName: (path: string, subPath?: string) => void;
}>((set) => ({
  pathName: 'Dashboard',
  setPathName: (path: string, subPath?: string) => {
    set({ pathName: path, subPathName: subPath });
  },
}));

type NavItem = {
  name: string;
  href?: string;
  icon?: React.ElementType;
  description?: string;
  disabled?: boolean;
  children?: Array<NavItem>;
};

const navigationItems: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutGrid,
    description: 'Dashboard overview and main statistics',
  },
  {
    name: 'Onboardings',
    icon: FileText,
    description: 'Manage membership applications',
    children: [
      {
        name: 'Applications List',
        href: '/admin/membership-applications',
        icon: FileText,
        description: 'Manage membership applications',
      },
    ],
  },
  {
    name: 'Members',
    icon: Users,
    description: 'Manage member accounts and information',
    children: [
      {
        name: 'Members List',
        href: '/admin/members',
        icon: Users,
        description: 'Manage member accounts and permissions',
      },
      {
        name: 'Societies',
        href: '/admin/societies',
        icon: Map,
        description: 'Manage societies and groups',
        disabled: true,
      },
      {
        name: 'Educations',
        href: '/admin/educations',
        icon: FileText,
        description: 'Manage education records',
      },
      {
        name: 'Notes',
        href: '/admin/notes',
        icon: FileText,
        description: 'Manage member notes',
      },
    ],
  },
  {
    name: 'Events',
    icon: Calendar,
    description: 'Manage events and schedules',
    children: [
      {
        name: 'Events List',
        href: '/admin/events',
        icon: Calendar,
        description: 'Manage events and schedules',
      },
      {
        name: 'Calendar',
        href: '/admin/calendar',
        icon: Calendar,
        description: 'View event calendar',
      },
    ],
  },
  {
    name: 'Orders & Billing',
    icon: DollarSign,
    description: 'Manage orders, products, and invoices',
    children: [
      {
        name: 'Service Purchase',
        href: '/admin/products/service-purchase',
        icon: DollarSign,
        description: 'Initiating an order or service request',
      },
      {
        name: 'Product Fulfillment',
        href: '/admin/products/product-fulfillment',
        icon: BoxesIcon,
        description: 'Processing and delivering purchased products',
      },
      {
        name: 'Invoices',
        href: '/admin/products/invoices',
        icon: FileText,
        description: 'Manage customer invoices and payments',
      },
      {
        name: 'Invoice Batching',
        href: '/admin/products/invoice-batch',
        icon: FileText,
        description: 'Grouping invoices for payment or record-keeping',
      },
    ],
  },
  {
    name: 'System',
    icon: Settings,
    description: 'System settings and maintenance',
    children: [
      {
        name: 'Files',
        href: '/admin/collections',
        icon: FileText,
        description: 'Manage files and uploads',
      },
      {
        name: 'Settings',
        href: '/admin/settings',
        icon: Settings,
        description: 'System settings and configurations',
      },
      {
        name: 'Server Logs',
        href: '/admin/logs',
        icon: Logs,
        description: 'View system logs and activities',
      },
    ],
  },
];

export function AppSidebar() {
  const { logout, loading, user } = useAuth();
  const pathID = pathTitle((state) => state.pathName);
  const subPathID = pathTitle((state) => state.subPathName);
  const pathname = usePathname();

  // State to track which navigation groups are expanded
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {},
  );

  // Determine which groups should be expanded based on the current path
  useEffect(() => {
    const newExpandedGroups: Record<string, boolean> = {};

    navigationItems.forEach((item) => {
      if (item.children) {
        // Check if any child route matches the current path
        const isActive = item.children.some(
          (child) =>
            pathname.startsWith(child.href || '') ||
            pathID === child.name ||
            subPathID === child.name,
        );

        if (isActive) {
          newExpandedGroups[item.name] = true;
        }
      }
    });

    setExpandedGroups(newExpandedGroups);
  }, [pathname, pathID, subPathID]);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Sidebar className='z-30 w-64 border-r border-none bg-accent text-accent-foreground'>
      <SidebarContent
        className='scrollbar-hide overflow-y-auto border-r-2 bg-accent pb-24 text-accent-foreground'
        style={{
          scrollbarWidth: 'none' /* Firefox */,
          msOverflowStyle: 'none' /* IE and Edge */,
          maxHeight: 'calc(100vh - 64px)' /* Ensure content is scrollable */,
        }}
      >
        <div className='p-6 pb-1'>
          <h1 className='flex items-center gap-2 text-xl font-semibold'>
            <div className='relative mx-auto -ml-1 aspect-[24/4] w-full'>
              <Image src='/text-logo-white.png' alt='logo' layout='fill' />
            </div>
          </h1>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className='pt-6'>
              {/* Dashboard item */}
              {navigationItems.slice(0, 1).map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href || '#'}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-accent-foreground transition-colors hover:bg-primary/20 hover:text-accent-foreground/50',
                        (pathID === item.name ||
                          subPathID === item.name ||
                          pathname === item.href ||
                          (pathname.startsWith(item.href || '') &&
                            item.href !== '/' &&
                            pathname.replace(item.href || '', '') === '')) &&
                          'border border-primary-foreground/75',
                      )}
                      title={item.description}
                    >
                      {item.icon && <item.icon className='h-4 w-4' />}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Collapsible navigation groups */}
              {navigationItems.slice(1).map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleGroup(item.name)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-accent-foreground hover:bg-primary/10',
                        )}
                      >
                        <div className='flex items-center gap-3'>
                          {item.icon && <item.icon className='h-4 w-4' />}
                          <span>{item.name}</span>
                        </div>
                        {expandedGroups[item.name] ? (
                          <ChevronDown className='h-4 w-4' />
                        ) : (
                          <ChevronRight className='h-4 w-4' />
                        )}
                      </button>

                      {expandedGroups[item.name] && (
                        <div className='ml-2 mt-1 border-l border-accent-foreground/20 pl-2'>
                          {item.children.map((child) => (
                            <SidebarMenuItem key={child.name}>
                              <SidebarMenuButton asChild>
                                <Link
                                  href={child.href || '#'}
                                  className={cn(
                                    'flex items-center gap-3 rounded-lg px-3 py-2 text-accent-foreground transition-colors hover:bg-primary/20 hover:text-accent-foreground/50',
                                    (pathname === child.href ||
                                      (pathname.startsWith(child.href || '') &&
                                        child.href !== '/' &&
                                        pathname.replace(
                                          child.href || '',
                                          '',
                                        ) === '')) &&
                                      'border border-primary-foreground/75',
                                  )}
                                  title={child.description}
                                >
                                  <child.icon className='h-4 w-4' />
                                  <span>{child.name}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </div>
                      )}
                    </>
                  ) : null}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {!loading && (
        <div className='absolute bottom-0 flex w-full items-center justify-between gap-4 border-r-2 bg-accent px-4 py-4 text-accent-foreground'>
          <div className='flex flex-1 items-center gap-3'>
            <div className='h-8 w-8 rounded-full bg-secondary' />
            <div className='flex flex-col text-primary-foreground'>
              <span className='max-w-36 truncate text-sm font-medium text-accent-foreground'>
                {user?.displayName}
              </span>
              <span className='max-w-36 truncate text-xs text-accent-foreground'>
                {user?.email}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className='text-accent-foreground hover:text-accent-foreground/50'
            title='Logout'
          >
            <LogOut className='h-6 w-6' />
          </button>
        </div>
      )}
    </Sidebar>
  );
}
