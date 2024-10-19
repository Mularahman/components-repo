import { ReactNode, useCallback } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../pagination/pagination'
import React from 'react'
interface TableItemProps {
  current: number
  page: number
  onChange: (page: number) => void
}

const ItemLink = ({ current, page, onChange }: TableItemProps) => {
  const handleChange = useCallback(() => {
    onChange(page)
  }, [page, onChange])

  return (
    <PaginationItem key={`#{page}`}>
      <PaginationLink href='#' onClick={handleChange} isActive={current === page} size={undefined}>
        {page}
      </PaginationLink>
    </PaginationItem>
  )
}

interface TablePaginationProps {
  current: number
  total: number
  onChange: (page: number) => void
}

const ItemLinks = ({ current, total, onChange }: TablePaginationProps) => {
  const itemLinks: ReactNode[] = []

  if (total <= 7) {
    for (let page = 1; page <= total; page++) {
      itemLinks.push(<ItemLink key={page} current={current} page={page} onChange={onChange} />)
    }

    return itemLinks
  }

  const startPage = Math.max(1, current - 2)
  const endPage = Math.min(total, current + 2)

  for (let page = startPage; page <= endPage; page++) {
    itemLinks.push(<ItemLink key={page} current={current} page={page} onChange={onChange} />)
  }

  if (startPage - 1 <= total - endPage) {
    itemLinks.push(<PaginationEllipsis key={`#ellipsis${total}`} />)
    itemLinks.push(<ItemLink key={total} current={current} page={total} onChange={onChange} />)

    return itemLinks
  }

  itemLinks.unshift(<PaginationEllipsis key='#ellipsis1' />)
  itemLinks.unshift(<ItemLink key={1} current={current} page={1} onChange={onChange} />)

  return itemLinks
}

const TablePagination = ({ current, total, onChange }: TablePaginationProps) => {
  const handlePrev = useCallback(() => {
    onChange(current - 1)
  }, [onChange, current])

  const handleNext = useCallback(() => {
    onChange(current + 1)
  }, [onChange, current])

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrev} disabled={current === 1} />
        </PaginationItem>
        <ItemLinks current={current} total={total} onChange={onChange} />
        <PaginationItem>
          <PaginationNext onClick={handleNext} disabled={current === total} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default TablePagination
