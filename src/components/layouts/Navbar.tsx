'use client';

import Link from 'next/link';

import DesktopNav from '@/components/layouts/DesktopNav';
import MobileNav from '@/components/layouts/MobileNav';
import { buttonVariants } from '../ui/button';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b py-3'>
      <nav className='container px-2 sm:px-4 lg:px-6 flex items-center justify-between'>
        {/* Left */}
        <MobileNav />
        <DesktopNav />

        {/* Right */}
        <div className='flex items-center gap-x-2'>
          <Link
            href='/sign-in'
            className={buttonVariants({
              size: 'sm',
            })}
          >
            Sign In
            <span className='sr-only'>Sign In</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
