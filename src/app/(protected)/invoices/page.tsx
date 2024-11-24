'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Settings, Download, ChevronDown, MoreVertical } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import InvoicesListButtons from '@/app/components/invoices/InvoicesListButtons';

type Invoice = {
  id: string;
  customer: string;
  created: string;
  due: string;
  status: 'Due' | 'Draft' | 'Paid';
  amount: string;
  viewed?: boolean;
};

const data: Invoice[] = [
  {
    id: '0201',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 15, 2024',
    due: 'Aug 15, 2024',
    status: 'Due',
    amount: '$21.00 USD',
  },
  {
    id: '0202',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 15, 2024',
    due: 'Aug 23, 2024',
    status: 'Draft',
    amount: '$21.00 USD',
  },
  {
    id: '0203',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0204',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0205',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0205',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0206',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0207',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0208',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0209',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0210',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0211',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0212',
    customer: 'Abigail Smith (Jane A...)',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
  {
    id: '0212',
    customer: 'Sam Collins',
    created: 'Aug 23, 2024',
    due: 'Aug 23, 2024',
    status: 'Paid',
    amount: '$21.00 USD',
  },
];
export default function InvoicingPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<Invoice>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'customer',
      header: ({ column }) => (
        <Button
          variant='ghost'
          className='-ml-4 h-8'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Customer
          {column.getIsSorted() === 'asc' ? (
            <ChevronUpIcon className='ml-2 h-4 w-4' />
          ) : (
            <ChevronDownIcon className='ml-2 h-4 w-4' />
          )}
        </Button>
      ),
      filterFn: 'includesString',
    },
    {
      accessorKey: 'id',
      header: 'Invoice no.',
      cell: ({ row }) => (
        <span className='text-blue-600'>{row.getValue('id')}</span>
      ),
    },
    {
      accessorKey: 'created',
      header: ({ column }) => (
        <Button
          variant='ghost'
          className='-ml-4 h-8'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Created
          {column.getIsSorted() === 'asc' ? (
            <ChevronUpIcon className='ml-2 h-4 w-4' />
          ) : (
            <ChevronDownIcon className='ml-2 h-4 w-4' />
          )}
        </Button>
      ),
    },
    {
      accessorKey: 'due',
      header: 'Due',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.getValue('status') as string;
        return (
          <Badge
            className={
                status === 'Draft' ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' :
                status === 'Paid' ? 'bg-green-400 text-green-800 hover:bg-green-500' :
                  status === 'Due' ? 'destructive' : 'hover:bg-white'}
          >
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'viewed',
      header: 'Viewed',
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
    },
    {
      id: 'actions',
      cell: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <MoreVertical className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>
              <Link href={`/activity`}>
                View details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Edit invoice</DropdownMenuItem>
            <DropdownMenuItem>Download PDF</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const TablePagination = () => (
    <div className='flex items-center justify-between px-2 py-4'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href='#'
              onClick={() => table.previousPage()}
              aria-disabled={!table.getCanPreviousPage()}
            />
          </PaginationItem>
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href='#'
                onClick={() => table.setPageIndex(i)}
                isActive={table.getState().pagination.pageIndex === i}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href='#'
              onClick={() => table.nextPage()}
              aria-disabled={!table.getCanNextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-semibold'>Invoicing</h1>
        <InvoicesListButtons />
      </div>

      <Tabs defaultValue='invoices'>
      <TabsList className='p-1.5 flex gap-6 w-auto justify-start bg-white'>
        <TabsTrigger
          value='invoices'
          className={cn(
            'rounded-full font-bold data-[state=active]:bg-white',
            'data-[state=active]:text-[#142c8e] data-[state=active]:shadow-sm',
            'transition-all duration-200'
          )}
        >
          Invoices
        </TabsTrigger>
        <TabsTrigger
          value='estimates'
          className={cn(
            'rounded-full font-bold data-[state=active]:bg-white',
            'data-[state=active]:text-[#142c8e] data-[state=active]:shadow-sm',
            'transition-all duration-200'
          )}
        >
          Estimates
        </TabsTrigger>
        <TabsTrigger
          value='recurring'
          className={cn(
            'rounded-full font-bold data-[state=active]:bg-white',
            'data-[state=active]:text-[#142c8e] data-[state=active]:shadow-sm',
            'transition-all duration-200'
          )}
        >
          Recurring series
        </TabsTrigger>
      </TabsList>

        <TabsContent value='invoices'>
          <div className='space-y-4'>
            <div className='flex gap-4 items-center'>
              <Select defaultValue='all'>
                <SelectTrigger className='w-[200px] h-12'>
                  <SelectValue placeholder='Search by field' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All</SelectItem>
                  <SelectItem value='customer'>Customer</SelectItem>
                  <SelectItem value='invoice'>Invoice no.</SelectItem>
                </SelectContent>
              </Select>

              <div className='flex-1'>
                <Input
                  placeholder='Search by customer name...'
                  defaultValue={
                    (table.getColumn('customer')?.getFilterValue() as string) ??
                    ''
                  }
                  onChange={(event) =>
                    table
                      .getColumn('customer')
                      ?.setFilterValue(event.target.value)
                  }
                  className='max-w-sm h-12'
                />
              </div>

              <div className='flex items-center gap-2 rounded-3xl py-2 px-4 border-2 border-[#142c8e] text-[#142c8e]'>
                <Icon icon="mage:filter-fill" className='w-4 h-4' />
                <span className='font-bold'>Filters</span>
                <Badge
                  variant='secondary'
                  className='bg-blue-100 text-blue-800'
                >
                  1
                </Badge>
              </div>

              <div className='w-12 h-12 flex items-center justify-center rounded-full border-collapse border-2 border-[#142c8e]'>
                <Download className='w-4 h-4 text-[#142c8e]'/>
              </div>
            </div>

            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <span>Filtered by</span>
              <Badge
                variant='secondary'
                className='bg-blue-100 flex items-center gap-1'
              >
                Creation date: Past 30 days
                <button className='ml-1'>×</button>
              </Badge>
            </div>

            <div className='rounded-md border'>
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && 'selected'}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className='h-24 text-center'
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <TablePagination />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
