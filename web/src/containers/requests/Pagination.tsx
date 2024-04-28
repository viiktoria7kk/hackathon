import { FC } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '~/components/Pagination'

import { Routes } from '~/constants/routes'
import { createUrlPath } from '~/utils'

type PaginationContainerProps = {
  currentPage: number
  totalPages: number
}

const PaginationContainer: FC<PaginationContainerProps> = ({
  currentPage,
  totalPages
}) => {
  const previousPage = currentPage > 1 ? currentPage - 1 : 1

  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            to={createUrlPath(Routes.REQUESTS, '', {
              page: previousPage
            })}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === currentPage}
              to={createUrlPath(Routes.REQUESTS, '', { page })}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            to={createUrlPath(Routes.REQUESTS, '', {
              page: nextPage
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationContainer
