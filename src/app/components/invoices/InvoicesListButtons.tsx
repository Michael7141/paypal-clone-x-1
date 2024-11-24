import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown, Settings } from 'lucide-react'
import React from 'react'

export default function InvoicesListButtons() {
  return (
    <div className='flex items-center gap-3'>
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='border-[#142C8E] border-2'>
        <Button
          variant='outline'
          className={`
            text-[#142C8E] font-bold px-4 py-2 h-10 text-lg
            border-[2px] border-[#142C8E] hover:border-gray-400
            bg-white hover:bg-gray-50
            rounded-full transition-colors duration-200
          `}
        >
          <Settings className='ml-1 h-4 w-4' />
          Settings
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>

    <Button
      className={`
        bg-[#142C8E] hover:bg-[#0d1f66]
        text-white font-medium px-6 py-2 h-10 text-lg
        rounded-full transition-colors duration-200
      `}
    >
      Create New
      <ChevronDown className='ml-1 h-4 w-4' />
    </Button>
  </div>
  )
}
