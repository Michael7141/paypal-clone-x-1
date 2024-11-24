"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icon } from '@iconify/react/dist/iconify.js';


export default function MoneyRequestCard() {
  return (
    <Card className='overflow-hidden rounded-2xl'>
      <div className='flex'>
        <div className='flex-1 p-6'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
              <span className='text-4xl font-semibold text-blue-600'>
                $2.98 SGD
              </span>
              <span className='text-gray-700 text-sm'>
                You received a request.
              </span>
            </div>
            <div className='flex items-center gap-3 mt-4'>
              <Icon
                icon='fxemoji:artistpalette'
                className='h-6 w-6 text-[#142c8e]'
              />
              <span className='text-gray-600 text-sm'>From Stickyella</span>
              <Button
                size='sm'
                className='ml-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full text-xs px-4'
              >
                Pay Now
              </Button>
            </div>
          </div>
        </div>
        <div className='w-1/2 bg-blue-500 flex items-center justify-center p-6'>
          <div className='bg-white/10 rounded-full p-4'>
            <Icon icon='vaadin:paperplane' className='h-8 w-8 text-white' />
          </div>
        </div>
      </div>
    </Card>
  )
}
