'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';
import { Label } from '@/components/ui/label';

export default function RecentActivity() {
  return (
    <Card className='rounded-xl flex flex-col p-4 gap-3'>
      <Label className='text-lg font-semibold'>Recent Activity</Label>
      <Card className='rounded-xl'>
        <CardContent className='p-4'>
          <div className='flex gap-5 items-center w-full'>
            <div className='w-14 h-12 bg-[#142c8e] rounded-full flex items-center justify-center'>
              <Gift className='w-6 h-6 text-white' />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between items-start w-full'>
                <span className='font-bold text-lg'>Paypal Giving Fund</span>
                <span className='font-bold text-lg'>-$1.00</span>
              </div>
              <span className='text-sm'>August 15. Donation</span>
              <span className='text-sm'>
                "what is a worthy cause, i pledge to donate back after my
                pay...""
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='rounded-xl'>
        <CardContent className='p-4'>
          <div className='flex gap-5 items-center w-full'>
            <div className='w-14 h-12 bg-[#142c8e] rounded-full flex items-center justify-center'>
              <Gift className='w-6 h-6 text-white' />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between items-start w-full'>
                <span className='font-bold text-lg'>Paypal Giving Fund</span>
                <span className='font-bold text-lg'>-$1.00</span>
              </div>
              <span className='text-sm'>August 15. Donation</span>
              <span className='text-sm'>
                "what is a worthy cause, i pledge to donate back after my
                pay...""
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='rounded-xl'>
        <CardContent className='p-4'>
          <div className='flex gap-5 items-center w-full'>
            <div className='w-14 h-12 bg-[#142c8e] rounded-full flex items-center justify-center'>
              <Gift className='w-6 h-6 text-white' />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between items-start w-full'>
                <span className='font-bold text-lg'>Paypal Giving Fund</span>
                <span className='font-bold text-lg'>-$1.00</span>
              </div>
              <span className='text-sm'>August 15. Donation</span>
              <span className='text-sm'>
                "what is a worthy cause, i pledge to donate back after my
                pay...""
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='rounded-xl'>
        <CardContent className='p-4'>
          <div className='flex gap-5 items-center w-full'>
            <div className='w-14 h-12 bg-[#142c8e] rounded-full flex items-center justify-center'>
              <Gift className='w-6 h-6 text-white' />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between items-start w-full'>
                <span className='font-bold text-lg'>Paypal Giving Fund</span>
                <span className='font-bold text-lg'>-$1.00</span>
              </div>
              <span className='text-sm'>August 15. Donation</span>
              <span className='text-sm'>
                "what is a worthy cause, i pledge to donate back after my
                pay...""
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='rounded-xl'>
        <CardContent className='p-4'>
          <div className='flex gap-5 items-center w-full'>
            <div className='w-14 h-12 bg-[#142c8e] rounded-full flex items-center justify-center'>
              <Gift className='w-6 h-6 text-white' />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between items-start w-full'>
                <span className='font-bold text-lg'>Paypal Giving Fund</span>
                <span className='font-bold text-lg'>-$1.00</span>
              </div>
              <span className='text-sm'>August 15. Donation</span>
              <span className='text-sm'>
                "what is a worthy cause, i pledge to donate back after my
                pay...""
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Label className='text-base font-semibold text-[#0070DE]'>Show All</Label>
    </Card>
  );
}
