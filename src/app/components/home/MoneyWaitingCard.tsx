import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export default function MoneyWaitingCard() {
  return (
    <div className='w-full'>
      <div className='bg-[#0070DE] text-white p-6 rounded-t-xl'>
        <div className='w-full flex items-center'>
          <div className='w-1/2'>
          <h3 className='text-lg pb-7'>Money is waiting for you</h3>
            <div className='text-4xl font-bold mb-2'>$2.07</div>
            <span>Accept the Money</span>
          </div>
          <div className='w-1/2'>
            <div className='flex w-11/12 items-center justify-end'>
            <Icon icon='emojione:money-bag' className='h-24 w-24' />
            </div>
          </div>
        </div>
      </div>
      <div className='p-6 rounded-b-xl flex gap-4 border-2 border-[#0070DE]'>
        <Icon icon='heroicons:credit-card' className='w-6 h-6 text-[#0070DE]' />
        <div className=' flex flex-col gap-3'>
          <span className='text-sm'>
            Use a debit card to shop in stores with your Paypal balance.
          </span>
          <span className='text-sm font-bold text-[#0070DE]'>
            Get a Paypal Debit Card{' '}
          </span>
        </div>
      </div>
    </div>
  )
}
