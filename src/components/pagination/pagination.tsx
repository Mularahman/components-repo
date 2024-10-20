import { ComponentProps, forwardRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '../../utils/utils'
import { ButtonProps, buttonVariants } from '../button/button'
import React from 'react'

const Pagination = ({ className, ...props }: ComponentProps<'nav'>) => (
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)

Pagination.displayName = 'Pagination'

const PaginationContent = forwardRef<HTMLUListElement, ComponentProps<'ul'>>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
))

PaginationContent.displayName = 'PaginationContent'

const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<'li'>>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))

PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
  href: string
} & Pick<ButtonProps, 'size'> &
  ComponentProps<typeof Link>

const PaginationLink = ({ className, isActive, size = 'icon', href, ...props }: PaginationLinkProps) => (
  <Link
    href={href}
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      className,
    )}
    {...props}
  />
)

PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
  className,
  onClick,
  disabled,
}: {
  className?: string
  onClick: () => void
  disabled: boolean
}) => (
  <button
    aria-label='Go to previous page'
    className={cn(
      buttonVariants({
        variant: 'ghost',
        size: 'default',
      }),
      'gap-1 pl-2.5',
      className,
    )}
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
  >
    <ChevronLeft className='h-4 w-4' />
    <span>Previous</span>
  </button>
)

PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
  className,
  onClick,
  disabled,
}: {
  className?: string
  onClick: () => void
  disabled: boolean
}) => (
  <button
    aria-label='Go to next page'
    className={cn(
      buttonVariants({
        variant: 'ghost',
        size: 'default',
      }),
      'gap-1 pr-2.5',
      className,
    )}
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
  >
    <span>Next</span>
    <ChevronRight className='h-4 w-4' />
  </button>
)

PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({ className, ...props }: ComponentProps<'span'>) => (
  <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More pages</span>
  </span>
)

PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}