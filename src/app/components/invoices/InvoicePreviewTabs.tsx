import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import React from 'react';

export default function InvoicePreviewTabs() {
  return (
    <Tabs defaultValue='email' className='w-fit'>
      <TabsList className='bg-gray-50 p-1.5'>
        <TabsTrigger
          value='pdf'
          className={cn(
            'rounded-full text-sm data-[state=active]:bg-white',
            'data-[state=active]:text-blue-600 data-[state=active]:shadow-sm',
            'transition-all duration-200'
          )}
        >
          Invoice PDF preview
        </TabsTrigger>
        <TabsTrigger
          value='mobile'
          className={cn(
            'rounded-full text-sm data-[state=active]:bg-white',
            'data-[state=active]:text-blue-600 data-[state=active]:shadow-sm',
            'transition-all duration-200'
          )}
        >
          Mobile preview
        </TabsTrigger>
        <TabsTrigger
          value='email'
          className={cn(
            'rounded-full text-sm data-[state=active]:bg-white',
            'data-[state=active]:text-blue-600 data-[state=active]:shadow-sm',
            'transition-all duration-200'
          )}
        >
          Email preview
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
