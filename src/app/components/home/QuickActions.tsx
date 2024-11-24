'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Trophy, MoreVertical } from 'lucide-react';

export default function QuickActions() {
  return (
    <>
      <div className='grid grid-cols-2 gap-4 mb-6'>
        <Button
          className='bg-[#142c8e] hover:bg-[#1a379e] rounded-3xl'
          size={'lg'}
        >
          Send
        </Button>
        <Button
          className='bg-[#142c8e] hover:bg-[#1a379e] rounded-3xl'
          size={'lg'}
        >
          Request
        </Button>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div className='flex flex-col items-center'>
          <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-sm'>
            <Trophy className='w-6 h-6 text-[#142c8e]' />
          </div>
          <span className='text-sm text-center'>PayPal Rewards</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-sm'>
            <Icon
              icon='material-symbols:favorite-outline'
              className='w-6 h-6 text-[#142c8e]'
            />
          </div>
          <span className='text-sm text-center'>Donate</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-sm'>
            <Icon
              icon='heroicons:receipt-percent'
              className='w-6 h-6 text-[#142c8e]'
            />
          </div>
          <span className='text-sm text-center'>Split a bill</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-sm'>
            <Icon icon='ph:phone-fill' className='w-6 h-6 text-[#142c8e]' />
          </div>
          <span className='text-sm text-center'>Reload phone</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-sm'>
            <MoreVertical className='w-6 h-6 text-[#142c8e]' />
          </div>
          <span className='text-sm text-center'>More</span>
        </div>
      </div>
    </>
  );
}
