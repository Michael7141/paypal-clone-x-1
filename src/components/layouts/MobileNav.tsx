'use client';
import { Bell, Menu, Search, Settings } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='flex lg:hidden bg-[#142c8e] justify-between'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button className='bg-[#142c8e] hover:bg-[#142c8e]'>
            <Menu className='text-white bg-[#142c8e]' />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <div className='px-2 flex flex-col gap-4'>
            <Link
              href='/'
              className='flex items-center'
              onClick={() => setIsOpen(false)}
            >
              <Icon
                icon='logos:paypal'
                className='mr-2 h-4 w-4'
                aria-hidden='true'
              />
              <span className='font-bold'>Paypal</span>
              <span className='sr-only'>Paypal</span>
            </Link>
            <div className='text-sm'>
              <Accordion
                type='multiple'
                defaultValue={['item-1', 'item-2', 'item-3']}
                className='w-full'
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger>Home</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link onClick={() => setIsOpen(false)} href='/home'>
                        PayPal Rewards
                      </Link>
                      <Link onClick={() => setIsOpen(false)} href='/home'>
                        Fundraisers
                      </Link>
                      <Link onClick={() => setIsOpen(false)} href='/home'>
                        Recent Activity
                      </Link>
                      <Link onClick={() => setIsOpen(false)} href='/home'>
                        Popular Cash Back deals
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Finances</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link onClick={() => setIsOpen(false)} href='/finances'>
                        Manage finances
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Send and Request</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/send-and-request'
                      >
                        Send and Request cards
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-4'>
                  <AccordionTrigger>Rewards</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/rewards'
                      >
                        Get rewards
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-5'>
                  <AccordionTrigger>Wallet</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/wallet'
                      >
                        Link a card or bank
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/wallet'
                      >
                        Visa card
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-6'>
                  <AccordionTrigger>Activity</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/activity'
                      >
                        Invoice details
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-7'>
                  <AccordionTrigger>Invoices</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/invoices'
                      >
                        Table
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-8'>
                  <AccordionTrigger>Help</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/help'
                      >
                        Contact us
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className='flex items-center lg:w-auto w-full lg:justify-center justify-end space-x-4'>
        <Button
          variant='ghost'
          size='icon'
          className='text-white hover:bg-blue-900 hover:text-white rounded-full'
        >
          <Search className='w-5 h-5' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='text-white hover:bg-blue-900 hover:text-white rounded-full'
        >
          <Bell className='w-5 h-5' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='text-white hover:bg-blue-900 hover:text-white rounded-full'
        >
          <Settings className='w-5 h-5' />
        </Button>
        <Button
          variant='ghost'
          className='text-white hover:bg-blue-900 hover:text-white text-sm font-medium ml-2'
        >
          LOG OUT
        </Button>
      </div>
    </div>
  );
}
