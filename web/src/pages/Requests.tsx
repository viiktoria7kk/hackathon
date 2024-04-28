import { useSearchParams } from 'react-router-dom'

import RequestCard from '~/components/RequestCard'
import Wrapper from '~/containers/layouts/Wrapper'
import { useRequestsStore } from '~/store/requestsStore'
import { Skeleton } from '~/components/Skeleton'
import PaginationContainer from '~/containers/requests/Pagination'
import Search from '~/containers/requests/Searh'
import { useFiltersStore } from '~/store/filtersStore'
import { useEffect } from 'react'
import Intro from '~/components/Intro'

const REQUESTS_PER_PAGE = 5

const Requests = () => {
  const { searchTerm, category, setSearchTerm } = useFiltersStore()

  const [searchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1

  const isHome = window.location.pathname === '/'

  const { requests, isLoading, getRequests } = useRequestsStore()

  const createSkeletonList = (length: number) => {
    return Array.from({ length }, (_, index) => (
      <Skeleton className='h-52 w-full mb-5 bg-zinc-300' key={index} />
    ))
  }
  const filteredRequests = requests.filter(
    (request) =>
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? request.category === category : true)
  )

  useEffect(() => {
    getRequests().catch((error) => {
      console.error(error)
    })
  }, [])

  const totalPages = isLoading
    ? 1
    : Math.ceil(filteredRequests.length / REQUESTS_PER_PAGE)

  const skeletonList = createSkeletonList(REQUESTS_PER_PAGE)

  const requestsList = isLoading ? (
    skeletonList
  ) : filteredRequests.length > 0 ? (
    filteredRequests.map((request) => (
      <RequestCard key={request.id} request={request} />
    ))
  ) : (
    <p className='text-center text-3xl'>
      За заданими параметрами немає результатів
    </p>
  )
  return (
    <Wrapper variant='page'>
      <Intro isHome={isHome}>
        <h2 className='font-bold text-4xl text-sky-400'>
          Підтримка {''}
          <span className='font-semibold text-4xl text-white'>
            на кожному {''}
          </span>
          <span className='font-bold text-4xl text-sky-400'>кроці</span>
        </h2>
        <h3 className='text-2xl text-white font-medium max-w-[560px] mt-6 mb-10'>
          <span className='font-bold text-2xl text-sky-400'>Ви не самі.</span>{' '}
          Наша спільнота обіцяє бути поруч з вами в найважчі миті.
          <span className='font-bold text-2xl text-sky-400'>
            {' '}
            Залиште свій запит{' '}
          </span>
          про допомогу, i ми згуртуємося разом, щоб пройти цей шлях разом.
        </h3>
      </Intro>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='flex flex-col gap-5 min-h-[550px]'>{requestsList}</div>
      <PaginationContainer currentPage={currentPage} totalPages={totalPages} />
    </Wrapper>
  )
}

export default Requests
