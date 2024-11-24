"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Trophy,
  MoreVertical,
  Search,
} from 'lucide-react';

export default function SendAgain() {
  return (
    <Card className='rounded-xl'>
      <CardContent className='p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>Send again</h2>
          <Button variant='ghost' size='sm'>
            <MoreVertical className='w-4 h-4' />
          </Button>
        </div>
        <div className='flex gap-4'>
          <div className='flex flex-col'>
            <div className='w-12 h-12 bg-[#142c8e] rounded-full flex items-center justify-center mb-2'>
              <Trophy className='w-6 h-6 text-white' />
            </div>
            <span className='text-sm text-center'>Stickyr...</span>
          </div>
          <div className='flex flex-col'>
            <div className='w-12 h-12 bg-[#142c8e] rounded-full flex items-center justify-center mb-2'>
              <Search className='w-6 h-6 text-white' />
            </div>
            <span className='text-sm text-center'>Search</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
