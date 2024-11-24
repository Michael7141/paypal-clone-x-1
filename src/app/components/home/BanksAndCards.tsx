'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MoreVertical } from 'lucide-react';

import { VisaCard } from '@/lib/svg';
export default function BanksAndCards() {
  return (
    <Card className='rounded-xl'>
      <CardContent className='p-6 space-y-7'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Banks and cards</h2>
          <Button variant='ghost' size='sm'>
            <MoreVertical className='w-4 h-4' />
          </Button>
        </div>
        <div className='flex items-center space-x-3'>
          <div className='w-12 h-8 bg-gray-200 rounded-lg flex items-center p-4'>
            <VisaCard className='h-6 fill-white' />
          </div>
          <div>
            <p className='font-bold '>Visa</p>
            <p>Debit ••0687</p>
          </div>
        </div>
        <div className='text-[#0070DE] font-bold'>Link a Card or Bank</div>
      </CardContent>
    </Card>
  );
}
