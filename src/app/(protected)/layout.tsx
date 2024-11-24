import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto pt-5">{children}</main>
      <Footer />
    </div>
  );
}
