import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Paypal Clone',
  description: 'demo paypal clone',
};

const gothic = Nunito({ subsets: ['latin'], weight: ['700', '500'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen', gothic.className)}>{children}</body>
    </html>
  );
}
