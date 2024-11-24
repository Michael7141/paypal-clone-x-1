"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PayPalRewardsCard() {
  return (
    <Card className='rounded-xl'>
        <CardContent className='p-6'>
          <div className='flex justify-between items-start'>
            <div>
              <h2 className='text-lg font-semibold pb-3'>PayPal Rewards</h2>
              <div className='text-4xl font-bold mb-1'>0 points</div>
              <div className='text-sm text-gray-600'>$0.00 cash back value</div>
              <div className='text-sm text-gray-600 pb-3'>Available balance</div>
              <Button
                variant='link'
                className='text-blue-600 p-0 h-auto mt-2 font-bold'
              >
                Ways to earn
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}
