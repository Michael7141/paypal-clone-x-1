"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

export default function SendAndRequest() {
  return (
    <div className='max-w-7xl mx-auto p-16'>
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col space-y-4 items-center'>
            <div className='flex space-x-4 items-center'>
                <div className='p-5 border-2 border-gray-300 rounded-full'>
              <Icon
                icon='material-symbols:person'
                width={64}
                height={64}
                className='text-[#142c8e] '
              />
                </div>
              <span className='text-gray-500'>calumjamerson@gmail.com</span>
            </div>
            <div className='flex justify-between w-full px-14 '>
              <div className='flex flex-col items-center'>
                <span className='text-gray-500 font-bold'>You send</span>
                <span className='text-2xl font-medium'>$2.36</span>
                <span className='text-gray-500 '>USD</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-gray-500 font-bold'>Recipient gets</span>
                <span className='text-2xl font-medium'>$2.98</span>
                <span className='text-gray-500'>SGD</span>
              </div>
            </div>
            <div className='text-xs text-gray-500 mt-1'>
              Conversion rate: 1 USD = 1.2611 SGD
            </div>
            <div className='text-xs text-gray-500 mt-1 text-center text-balance w-96'>
              This rate includes a currency conversion spread. The amount you'll
              pay may change as we lock in your rate, so check your final amount
              and fee details before you send.
            </div>
            <Textarea
              className='border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='A gift for you'
              rows={3}
            />
            <Button className='bg-[#142c8e] text-white w-full rounded-full'>
              Next
            </Button>
            <Button className='rounded-full w-full' variant='outline'>
              Cancel  
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
