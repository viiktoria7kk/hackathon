import RequestCard from '~/components/RequestCard'
import Wrapper from '~/containers/layouts/Wrapper'
import { useRequestsStore } from '~/store/requestsStore'
import { Skeleton } from '~/components/Skeleton'
import PaginationContainer from '~/containers/requests/Pagination'
import { useSearchParams } from 'react-router-dom'
import Search from '~/containers/requests/Searh'
import { RequestType } from '~/types'

const REQUESTS_PER_PAGE = 5

const Requests = () => {
  const [searchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1

  const { requests, isLoading } = useRequestsStore()

  const getRequestsForPage = (requests: RequestType[], page: number) => {
    return requests.slice(
      (page - 1) * REQUESTS_PER_PAGE,
      page * REQUESTS_PER_PAGE
    )
  }

  const createSkeletonList = (length: number) => {
    return Array.from({ length }, (_, index) => (
      <Skeleton className='h-52 w-full mb-5 bg-zinc-300' key={index} />
    ))
  }

  const visibleRequests = getRequestsForPage(requests, currentPage)
  const totalPages = isLoading
    ? 1
    : Math.ceil(requests.length / REQUESTS_PER_PAGE)

  const skeletonList = createSkeletonList(REQUESTS_PER_PAGE)

  const requestsList = isLoading
    ? skeletonList
    : visibleRequests.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))

  return (
    <Wrapper variant='page'>
      <Search />
      {requestsList}
      <PaginationContainer currentPage={currentPage} totalPages={totalPages} />
    </Wrapper>
  )
}

export default Requests
