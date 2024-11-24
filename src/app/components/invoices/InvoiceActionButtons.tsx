"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function InvoiceActionButtons() {
  return (
    <div className='flex items-center gap-3'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='border-[#142C8E] border-2'>
          <Button
            variant='outline'
            className={`
              text-[#142C8E] font-bold px-4 py-2 h-10 text-lg
              border-[1.5px] border-gray-300 hover:border-gray-400
              bg-white hover:bg-gray-50
              rounded-full transition-colors duration-200
            `}
          >
            More actions
            <ChevronDown className='ml-1 h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-48'>
          <DropdownMenuItem>Download PDF</DropdownMenuItem>
          <DropdownMenuItem>Print invoice</DropdownMenuItem>
          <DropdownMenuItem>Copy link</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        className={`
          bg-[#142C8E] hover:bg-[#0d1f66]
          text-white font-medium px-6 py-2 h-10 text-lg
          rounded-full transition-colors duration-200
        `}
      >
        Send
      </Button>
    </div>
  )
}
