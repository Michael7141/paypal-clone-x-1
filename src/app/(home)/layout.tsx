import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col justify-center w-full bg-red-400'>
      <Navbar />
      <div className='bg-green-300'>{children}</div>
      <Footer />
    </div>
  );
}
