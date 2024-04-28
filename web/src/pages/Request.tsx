import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Skeleton } from '~/components/Skeleton'
import Wrapper from '~/containers/layouts/Wrapper'
import { useRequestsStore } from '~/store/requestsStore'

const Request = () => {
  const { id } = useParams()

  const { request } = useRequestsStore()
  const { isLoading, getRequestById } = useRequestsStore()

  useEffect(() => {
    getRequestById(id || '').catch((error) => {
      console.error(error)
    })
  }, [id, getRequestById])

  if (isLoading) {
    return <Skeleton className='w-28 h-28' />
  }

  return (
    <Wrapper variant='page'>
      <h2>{request?.title}</h2>
      <p>{request?.description}</p>
      <p>Created At: {request?.createdAt}</p>
      <p>Content: {request?.content}</p>
      <p>Category: {request?.category}</p>
      <p>Status: {request?.isActive ? 'Active' : 'Inactive'}</p>
      <div>
        <p>
          User: {request?.user?.firstName} {request?.user?.lastName}
        </p>
        {request?.user?.avatar && <img src={request.user.avatar} />}
      </div>
    </Wrapper>
  )
}

export default Request
