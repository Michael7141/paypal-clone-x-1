import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icon } from '@iconify/react/dist/iconify.js';
import { MoreVertical } from 'lucide-react';
import React from 'react';

export default function FundraisersCard() {
  return (
    <Card className='rounded-xl flex flex-col p-4 gap-3'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold'>Fundraisers</h2>
        <Button variant='ghost' size='sm'>
          <MoreVertical className='w-4 h-4' />
        </Button>
      </div>
      <div className='w-[95%] flex justify-between'>
        <div className='flex gap-1 items-center w-full'>
          <div className='w-14 h-12 rounded-full flex items-center justify-center'>
            <Icon icon="hugeicons:treatment" className='w-10 h-10 text-[#0001E9]' />
          </div>
          <span className='font-semibold text-lg'>A Doctor for a life</span>
          
        </div>
        <div className='flex flex-col gap-1 text-sm justify-center items-end'>
            <span>$0.00</span>
            <span>Available</span>
          </div>
      </div>
    </Card>
  );
}
