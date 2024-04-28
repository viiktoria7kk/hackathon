import { User2Icon } from 'lucide-react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { Badge } from '~/components/Badge'
import { Button } from '~/components/Button'
import { Skeleton } from '~/components/Skeleton'
import Wrapper from '~/containers/layouts/Wrapper'
import { requestsService } from '~/services/requests'
import { useRequestsStore } from '~/store/requestsStore'
import { useUserStore } from '~/store/userStore'
import { normalizeDate } from '~/utils'

const Request = () => {
  const { id } = useParams()

  const { requests } = useRequestsStore()

  const handlePingMessage = () => {
    toast.success('Повідомлення надіслано користувачу на пошту!')
  }
  const request = requests?.filter((request) => request.id === id)[0]

  return (
    <Wrapper
      className='bg-gray-200 flex-row justify-center min-h-[650px]'
      variant='page'
    >
      <div>
        <article className='  bg-white rounded-md px-7 pt-4 pb-8 shadow-md transition  w-[700px] flex flex-col gap-10'>
          <div className='flex flex-col '>
            <div className='flex justify-between gap-3 items-center text-zinc-400 text-sm'>
              <span className='flex gap-1 items-center'>
                <User2Icon size={24} />
                {request?.user.firstName} {request?.user.lastName}
              </span>
              <span>{normalizeDate(request?.createdAt!)}</span>
            </div>
            <div className='flex flex-col justify-between gap-3 '>
              <div className='flex flex-col basis-[80%] gap-1 '>
                <h3 className='text-lg font-semibold'>{request?.title}</h3>
                <div>
                  <Badge>{request?.category}</Badge>
                </div>
                <div className='gap-4'>
                  <div>
                    <h4 className='font-bold'>Опис</h4>
                    <p className='line-clamp-3 pt-1'>{request?.description}</p>
                  </div>
                  <div>
                    <h4 className='font-bold'>Деталі</h4>
                    <p className='line-clamp-3 pt-1'>{request?.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button onClick={handlePingMessage}>
            Надіслати сповіщення на пошту
          </Button>
        </article>
      </div>
    </Wrapper>
  )
}

export default Request

          </div>
          <Button onClick={handlePingMessage}>
            Надіслати сповіщення на пошту
          </Button>
        </article>
      </div>
    </Wrapper>
  )
}

export default Request
