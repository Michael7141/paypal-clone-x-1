'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, RefreshCcw } from 'lucide-react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@/lib/utils';

const paymentMethods = [
  {
    id: 'paypal',
    label: 'PayPal USD',
    icon: (
      <Icon icon='bi:paypal' className='w-5 h-5' style={{ color: '#003087' }} />
    ),
  },
  {
    id: 'bitcoin',
    label: 'Bitcoin',
    icon: (
      <Icon
        icon='fa6-brands:bitcoin'
        className='w-6 h-6'
        style={{ color: '#F7931A' }}
      />
    ),
  },
  {
    id: 'ethereum',
    label: 'Ethereum',
    icon: (
      <Icon
        icon='iconoir:ethereum-circle-solid'
        className='w-6 h-6'
        style={{ color: '#627EEA' }}
      />
    ),
  },
  {
    id: 'litecoin',
    label: 'Litecoin',
    icon: (
      <Icon
        icon='simple-icons:litecoin'
        className='w-6 h-6'
        style={{ color: '#345D9D' }}
      />
    ),
  },
  {
    id: 'bitcoin-cash',
    label: 'Bitcoin Cash',
    icon: (
      <Icon
        icon='simple-icons:bitcoincash'
        className='w-6 h-6'
        style={{ color: '#0AC18E' }}
      />
    ),
  },
];

export default function CryptoPage() {
  const chartData = Array.from({ length: 24 }, (_, i) => ({
    time: i,
    value: 58000 + Math.random() * 2000 - 1000,
  }));

  const timeFrames = ['24H', '1W', '1M', '6M', '1Y', 'ALL'];
  const quickBuyAmounts = ['$20', '$50', '$100', '$500'];

  return (
    <div className='max-w-2xl mx-auto p-4'>
      {/* Navigation */}
      <div className='flex items-center space-x-4 mb-6'>
        <Button variant='ghost' className='p-0'>
          <ArrowLeft className='h-5 w-5' />
          <span className='ml-2 font-bold text-lg'>Crypto</span>
        </Button>
      </div>

      <Tabs defaultValue='bitcoin' className='w-full max-w-2xl'>
        <TabsList className='w-full flex bg-white border-b'>
          {paymentMethods.map((method) => (
            <TabsTrigger
              key={method.id}
              value={method.id}
              className='flex-1 flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-600 hover:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-blue-600'
            >
              {method.icon}
              {method.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Price Card */}
      <Card className='mb-8 rounded-lg'>
        <CardContent className='pt-6'>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold'>Bitcoin</h2>
            <div className='flex items-baseline space-y-2 flex-col'>
              <span className='text-4xl font-bold'>$58,892.69</span>
              <div className='flex gap-2'>
                <span className='text-red-500 text-sm'>
                  -$1,995.41 (-3.27%)
                </span>
                <span className='text-sm'>Past 24 hours</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className='h-64 my-8'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={chartData}>
                <Line
                  type='monotone'
                  dataKey='value'
                  stroke='#EF4444'
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey='time' hide={true} />
                <YAxis hide={true} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex justify-center items-center'>
              {/* Time frame selector */}
              <Tabs
                defaultValue='email'
                className='w-fit rounded-3xl overflow-hidden'
              >
                <TabsList className='p-2'>
                  {timeFrames.map((timeFrame) => (
                    <TabsTrigger
                      key={timeFrame}
                      value={timeFrame}
                      className={cn(
                        'rounded-full text-sm data-[state=active]:bg-white',
                        'data-[state=active]:text-blue-600 data-[state=active]:shadow-sm',
                        'transition-all duration-200'
                      )}
                    >
                      {timeFrame}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Buy button and quick amounts */}
            <div className='space-y-4'>
              <div className='flex space-x-2'>
                <Button className='flex-1 bg-[#142c8e] rounded-3xl' size='lg' >
                  Buy
                </Button>
                <Button variant='outline' size='lg' className='rounded-full w-10 h-13 border-2 border-[#142c8e] bg-[#142c8e]  font-bold'>
                  {/* <RefreshCcw className='h-5 w-5' /> */}
                  <Icon icon='la:exchange-alt' className='w-5 h-5 text-white hover:text-[#142c8e] font-bold' />
                </Button>
              </div>
              <div className='grid grid-cols-4 gap-2'>
                {quickBuyAmounts.map((amount) => (
                  <Button key={amount} variant='outline' className='rounded-full border-2 border-[#142c8e] text-[#142c8e] font-bold'>
                    {amount}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const timeFrames = ['24H', '1W', '1M', '6M', '1Y', 'ALL'];
const quickBuyAmounts = ['$20', '$50', '$100', '$500'];
