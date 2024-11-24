'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Switch } from '@radix-ui/react-switch';
import { ArrowLeft, PlusIcon, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import InvoiceActionButtons from '../invoices/InvoiceActionButtons';
import InvoicePreviewTabs from '../invoices/InvoicePreviewTabs';

export const InvoiceDetails = () => {
  const [quantity, setQuantity] = useState('3');
  const [shipItems, setShipItems] = useState(false);
  return (
    <div className='p-6 max-w-6xl mx-auto'>
      {/* Header */}
      <div className='flex justify-between items-center mb-8'>
        <div className='flex items-center gap-4'>
          <Button variant='ghost' className='p-2'>
            <ArrowLeft className='h-5 w-5' />
          </Button>
          <div>
            <h1 className='text-xl font-semibold'>Invoice No. 0202</h1>
            <p className='text-sm text-gray-500'>
              Date: 8/23/24 · Due: 8/23/24
            </p>
          </div>
        </div>
        <InvoiceActionButtons />
      </div>

      {/* Main Content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Left Column - Form */}
        <div className='space-y-6'>
          <Card>
            <CardContent className='pt-6'>
              <div className='mb-6'>
                <div className='flex items-center gap-4 text-xl mb-4'>
                  <Icon
                    icon='ic:round-group-add'
                    className='w-7 h-7 text-[#142c8e]'
                  />
                  Who are you billing?
                </div>
                <div className='flex items-center justify-between p-3 border rounded-xl'>
                  <div>
                    <p className='font-medium'>
                      Abigail Smith; Jane Apothecary
                    </p>
                    <p className='text-sm text-gray-500'>
                      jdoe@content-mobbin.com
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    <Button variant='ghost' size='icon' className='h-6 w-6'>
                      <Icon
                        icon='pepicons-print:pen'
                        className='h-4 w-4 text-gray-600'
                      />
                    </Button>
                    <Button variant='ghost' size='icon' className='h-6 w-6'>
                      <Icon
                        icon='carbon:close-filled'
                        className='h-4 w-4 text-gray-600'
                      />
                    </Button>
                  </div>
                </div>
              </div>

              <div className='w-full flex gap-2 items-center font-bold text-[#142c8e] text-lg'>
                <PlusIcon className='ml-2 h-4 w-4' />
                Add more recipients
                <HelpCircle className='ml-2 h-4 w-4' />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h2 className='text-lg font-semibold mb-4'>
                What are they paying for?
              </h2>
              <div className='border rounded-xl p-4 mb-4'>
                <div className='flex items-center gap-4 mb-2 h-full'>
                  <Input
                    type='number'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className='w-24'
                  />
                  <div className='flex-1'>
                    <p className='font-medium'>
                      $10.00 Product Design - Figma...
                    </p>
                    <span className='inline-block bg-gray-100 text-sm px-2 py-1 rounded-xl'>
                      30% OFF
                    </span>
                  </div>
                  <div className='flex flex-col justify-between h-full'>
                    <p className='font-semibold h-1/2'>$30.00</p>
                    <div className='flex gap-2 h-1/2'>
                      <Button variant='ghost' size='icon' className='h-6 w-6'>
                        <Icon
                          icon='pepicons-print:pen'
                          className='h-4 w-4 text-gray-600'
                        />
                      </Button>
                      <Button variant='ghost' size='icon' className='h-6 w-6'>
                        <Icon
                          icon='carbon:close-filled'
                          className='h-4 w-4 text-gray-600'
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-2 items-center font-bold text-[#142c8e] text-lg'>
                <PlusIcon className='ml-2 h-4 w-4' />
                Add more items
              </div>
            </CardContent>
          </Card>

          <div className='flex items-center gap-3 p-4'>
            <Switch
              checked={shipItems}
              onCheckedChange={setShipItems}
              className='bg-[#142c8e]'
            />
            <p>Ship items</p>
          </div>

          <div className='flex items-center justify-between p-4 border-t'>
            <p className='font-medium'>Subtotal</p>
            <p className='font-semibold'>$30.00</p>
          </div>
          <span className='w-full flex gap-2 items-center font-bold text-[#142c8e] text-lg'>
            Add other charges
          </span>
        </div>

        {/* Right Column - Preview */}
        <div className='space-y-6'>
          <div className='w-full justify-center flex'>
            <InvoicePreviewTabs />
          </div>

          <Card className='p-6'>
            <div className='mb-8'>
              <Icon
                icon='logos:paypal'
                className='text-2xl font-bold text-blue-900'
              />
              <h2 className='text-4xl font-bold text-blue-900 pt-6'>
                Here&apos;s your invoice
              </h2>
              <p className='text-gray-600'>
                Sam Lee sent you an invoice for $21.00 USD
              </p>
              <p className='text-gray-600'>Due date: Aug 23, 2024</p>
            </div>

            <div className='space-y-4 mb-8'>
              <h3 className='font-semibold'>Invoice details</h3>
              <div>
                <p className='text-sm text-gray-500'>Amount requested</p>
                <p>$21.00 USD</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Invoice number</p>
                <p>0202</p>
              </div>
            </div>

            <Button className='w-auto bg-[#142c8e] mb-6 rounded-3xl' size='lg'>
              View and Pay Invoice
            </Button>

            <div>
              <p className='font-semibold mb-2'>
                Don&apos;t recognize this invoice?
              </p>
              <Button variant='link' className='text-blue-600 p-0'>
                Report this invoice
              </Button>
              <p className='text-sm text-gray-500 mt-2'>
                Before paying, make sure you recognize this invoice. If you
                don&apos;t, report it. Learn more about common security threats and
                how to spot them.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
