"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul className={cn('flex flex-row items-center gap-2', className)} {...props} />
  )
}

function PaginationItem({ className, ...props }: React.ComponentProps<'li'>) {
  return <li className={cn('list-none', className)} {...props} />
}

type PaginationLinkProps = React.ComponentProps<'button'> & {
  isActive?: boolean
}

const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ className, isActive, ...props }, ref) => {
    return (
      <button
        ref={ref}
        data-slot='pagination-link'
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          buttonVariants({ variant: isActive ? 'default' : 'outline', size: 'sm' }),
          'h-8 min-w-8 px-3',
          className
        )}
        {...props}
      />
    )
  }
)
PaginationLink.displayName = 'PaginationLink'

type DirectionProps = React.ComponentProps<'button'> & { disabled?: boolean }

const PaginationPrevious = React.forwardRef<HTMLButtonElement, DirectionProps>(
  ({ className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label='Go to previous page'
        disabled={disabled}
        className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'h-8 px-2', className)}
        {...props}
      >
        <ChevronLeft className='size-4' />
        {children}
      </button>
    )
  }
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = React.forwardRef<HTMLButtonElement, DirectionProps>(
  ({ className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label='Go to next page'
        disabled={disabled}
        className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'h-8 px-2', className)}
        {...props}
      >
        {children}
        <ChevronRight className='size-4' />
      </button>
    )
  }
)
PaginationNext.displayName = 'PaginationNext'

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      className={cn('flex h-8 min-w-8 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className='size-4' />
      <span className='sr-only'>More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}


