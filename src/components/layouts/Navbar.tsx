'use client';

import { Button } from '../ui/button';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { Search, Bell, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/home', label: 'Home' },
  { href: '/finances', label: 'Finances' },
  { href: '/send-and-request', label: 'Send and Request' },
  { href: '/rewards', label: 'Rewards' },
  { href: '/wallet', label: 'Wallet' },
  { href: '/activity', label: 'Activity' },
  { href: '/invoices', label: 'Invoices' },
  { href: '/help', label: 'Help' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className='sticky top-0 z-50 bg-[#142c8e] w-full'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo and Main Navigation */}
          <div className='flex items-center space-x-6'>
            {/* PayPal Logo */}
            <Icon icon='logos:paypal' width='40' height='40' />
            <NavigationMenu className='max-w-none'>
              <NavigationMenuList className='space-x-2'>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      className={`text-white px-3 py-2 rounded-2xl text-sm font-medium transition-colors
                        ${
                          pathname === item.href
                            ? 'bg-blue-900'
                            : 'hover:bg-blue-900'
                        }`}
                      href={item.href}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Icons */}
          <div className='flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='icon'
              className='text-white hover:bg-blue-900 hover:text-white rounded-full'
            >
              <Search className='w-5 h-5' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='text-white hover:bg-blue-900 hover:text-white rounded-full'
            >
              <Bell className='w-5 h-5' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='text-white hover:bg-blue-900 hover:text-white rounded-full'
            >
              <Settings className='w-5 h-5' />
            </Button>
            <Button
              variant='ghost'
              className='text-white hover:bg-blue-900 hover:text-white text-sm font-medium ml-2'
            >
              LOG OUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
