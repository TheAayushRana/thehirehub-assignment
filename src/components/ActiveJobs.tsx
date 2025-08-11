'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from './ui/button';
import { ArrowUpDown } from 'lucide-react';

type ActiveJob = {
  id: number;
  jobTitle: string;
  company: string;
  status: string;
  applications: number;
  postedDate: string;
};

const data: ActiveJob[] = [
  {
    id: 1,
    jobTitle: 'Senior Full Stack Developer',
    company: 'Meta',
    status: 'active',
    applications: 142,
    postedDate: '2024-12-15',
  },
  {
    id: 2,
    jobTitle: 'AI/ML Engineer',
    company: 'OpenAI',
    status: 'active',
    applications: 89,
    postedDate: '2024-12-14',
  },
  {
    id: 3,
    jobTitle: 'DevOps Engineer',
    company: 'Amazon',
    status: 'processing',
    applications: 67,
    postedDate: '2024-12-13',
  },
  {
    id: 4,
    jobTitle: 'Frontend Developer',
    company: 'Netflix',
    status: 'active',
    applications: 203,
    postedDate: '2024-12-12',
  },
  {
    id: 5,
    jobTitle: 'Backend Developer',
    company: 'Google',
    status: 'active',
    applications: 67,
    postedDate: '2024-12-13',
  },
  {
    id: 6,
    jobTitle: 'Data Scientist',
    company: 'Tesla',
    status: 'active',
    applications: 203,
    postedDate: '2024-12-12',
  },
];

export const columns: ColumnDef<ActiveJob>[] = [
  {
    accessorKey: 'jobTitle',
    header: ({ column }) => (
      <Button
        variant='ghost'
        size='sm'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className='-ml-2 uppercase'
      >
        Job Title
        <ArrowUpDown className='ml-2 size-4' />
      </Button>
    ),
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('jobTitle')}</div>
    ),
  },
  {
    accessorKey: 'company',
    header: ({ column }) => (
      <Button
        variant='ghost'
        size='sm'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className='-ml-2 uppercase'
      >
        Company
        <ArrowUpDown className='ml-2 size-4' />
      </Button>
    ),
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('company')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <div className='flex justify-end'>
        <Button
          variant='ghost'
          size='sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='-mr-2 uppercase'
        >
          Status
          <ArrowUpDown className='ml-2 size-4' />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className='text-right font-medium'>{row.getValue('status')}</div>
      );
    },
  },
  {
    accessorKey: 'applications',
    header: ({ column }) => (
      <div className='flex justify-end'>
        <Button
          variant='ghost'
          size='sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='-mr-2'
        >
          <span className='hidden sm:inline'>Applications</span>
          <span className='sm:hidden'>Apps</span>
          <ArrowUpDown className='ml-2 size-4' />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className='text-right font-medium'>
          {row.getValue('applications')}
        </div>
      );
    },
  },
  {
    accessorKey: 'postedDate',
    header: ({ column }) => (
      <div className='flex justify-end'>
        <Button
          variant='ghost'
          size='sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='-mr-2'
        >
          <span className='hidden md:inline'>Posted Date</span>
          <span className='md:hidden'>Date</span>
          <ArrowUpDown className='ml-2 size-4' />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue('postedDate'));
      return (
        <div className='text-right font-medium'>
          <span className='hidden md:inline'>{row.getValue('postedDate')}</span>
          <span className='md:hidden'>
            {date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>
      );
    },
  },
];

const ActiveJobsTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    initialState: { pagination: { pageSize: 5 } },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className='w-full bg-white p-5'>
      <h2 className='text-lg uppercase font-normal mb-5'>Active Jobs</h2>
      <div className='overflow-x-auto overflow-hidden rounded-md border'>
        <Table className='min-w-full'>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className='px-2 sm:px-4'>
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
                    <TableCell
                      key={cell.id}
                      className='px-2 sm:px-4 py-2 sm:py-4'
                    >
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
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-2'>
        <div className='text-muted-foreground flex-1 text-sm text-center sm:text-left'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='flex space-x-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActiveJobsTable;
