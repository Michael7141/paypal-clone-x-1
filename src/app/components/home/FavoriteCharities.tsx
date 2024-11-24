'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icon } from '@iconify/react/dist/iconify.js';
import { MoreVertical } from 'lucide-react';

export default function FavoriteCharities() {
  return (
    <Card className='rounded-xl'>
      <CardContent className='p-6 space-y-7'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>Your favorite charities</h2>
          <Button variant='ghost' size='sm'>
            <MoreVertical className='w-4 h-4' />
          </Button>
        </div>
        <div className='flex items-center space-x-3 mb-4'>
          <Icon icon='wpf:doctors-bag' className='w-9 h-9 text-red-500' />
          <div>
            <div className='font-medium'>Doctors Without Borders</div>
            <Icon icon='majesticons:heart' className='w-6 h-6 text-red-500' />
          </div>
        </div>
        <div className='text-[#0070DE] font-bold'>Donate Now</div>
      </CardContent>
    </Card>
  );
}
