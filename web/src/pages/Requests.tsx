import RequestCard from '~/components/RequestCard'
import { useRequestsStore } from '~/store/requestsStore'

const Requests = () => {
  const requests = useRequestsStore((state) => state.requests)

  const requestsList = requests.map((request) => (
    <RequestCard key={request.id} request={request} />
  ))
  return <div className='flex flex-col gap-5 py-8'>{requestsList}</div>
}

export default Requests
