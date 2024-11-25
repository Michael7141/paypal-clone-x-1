import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { VisaCard } from '@/lib/svg';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function WalletPage() {
  return (
    <div className='max-w-3xl mx-auto p-6 lg:flex-row flex-col lg:items-start items-center flex gap-8'>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center justify-center'>
          <Button
            variant='default'
            className='w-40 bg-[#142c8e] hover:bg-blue-700 rounded-2xl'
            size='sm'
          >
            Link a card or bank
          </Button>
        </div>

        <div className='space-y-6'>
          {/* Linked Card Section */}
          <Card className='border-2 border-[#142c8e] rounded-xl w-96'>
            <CardContent className='p-4 flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <div className='w-12 h-8 bg-gray-200 rounded-lg flex items-center p-4'>
                  <VisaCard className='h-6 fill-white' />
                </div>

                <div>
                  <p className='font-bold text-blue-700'>Visa</p>
                  <p>Debit ••0687</p>
                  <div className='bg-green-800 text-white text-xs px-2 py-1 rounded-xl inline-block'>
                    PREFERRED
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card Details Section */}
        </div>
      </div>
      <Card className='rounded-xl'>
        <CardContent className='p-6 space-y-6'>
          <div className='flex justify-between items-start'>
            <div className='gap-7 flex flex-col w-full justify-start'>
              <div className='w-96 h-60 bg-gray-200 rounded-xl flex items-end justify-end p-4'>
                <VisaCard className='h-24 fill-white' />
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-lg font-medium text-start'>
                  Visa Debit ••0687
                </span>
                <span className='p-0 h-auto text-blue-600 hover:text-blue-700 font-bold'>
                  Give it a nickname
                </span>
              </div>
            </div>
          </div>

          <div className='space-y-1'>
            <p className='text-sm text-gray-600'>Expiration date</p>
            <p>12/2027</p>
          </div>

          <div className='space-y-2 '>
            <div className='flex items-center flex-col space-x-2'>
              <Icon
                icon='teenyicons:tick-circle-solid'
                className='text-green-500 h-5'
              />
              <p>Preferred when paying online</p>
              <Button
                variant='link'
                className='p-0 h-auto text-blue-600 hover:text-blue-700 font-bold'
              >
                Change
              </Button>
              <p className='text-sm text-center text-gray-600'>
                We&apos;ll use this when you shop or send money for goods and
                services.
              </p>
              <Button
                variant='link'
                className='p-0 h-auto text-blue-600 hover:text-blue-700 font-bold'
              >
                More about payment preferences
              </Button>
            </div>
          </div>

          <div className='flex w-full justify-between space-x-4 pt-4'>
            <Button
              variant='ghost'
              className='text-blue-600 hover:text-blue-700 font-bold text-lg'
            >
              Update card
            </Button>
            <Button
              variant='ghost'
              className='text-blue-600 hover:text-blue-700 font-bold text-lg'
            >
              Remove card
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
