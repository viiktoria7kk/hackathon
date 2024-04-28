import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Skeleton } from '~/components/Skeleton'
import { useRequestsStore } from '~/store/requestsStore'

const Request = () => {
  const { id } = useParams()

  const { request, isLoading, getRequestById } = useRequestsStore()

  useEffect(() => {
    void getRequestById(id || '')
  }, [])

  if (isLoading) {
    return <Skeleton />
  }

  return (
    <div>
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
    </div>
  )
}

export default Request
