import { FC } from 'react'
import { useUserStore } from '~/store/userStore'

import RequestCard from '~/components/RequestCard'
import { Button } from '~/components/Button'
import { PostModal } from '~/components/PostModal'

import { Trash2, Pencil } from 'lucide-react'

const UserRequests: FC = () => {
  const user = useUserStore((state) => state.user!)
  const deleteRequest = useUserStore((state) => state.deleteRequest)
  const requestsList = user.requests.map((request) => (
    <RequestCard
      key={request.id}
      menu={
        <>
          <Button
            onClick={() => deleteRequest(request.id)}
            size='icon'
            variant='destructive'
          >
            <Trash2 />
          </Button>
          <PostModal
            id={request.id}
            trigger={
              <Button size='icon' variant='outline'>
                <Pencil />
              </Button>
            }
          />
        </>
      }
      request={request}
    />
  ))

  return (
    <div className='w-full'>
      <h1 className='mb-5 text-3xl font-medium'>User Posts</h1>
      <div className='w-full flex flex-col gap-3'>
        <div className='flex items-center justify-end'>
          <PostModal
            trigger={<Button variant='default'>Add new post</Button>}
          />
        </div>
        <div className='flex flex-col gap-5 min-h-[550px] border-1 p-2'>
          {requestsList}
        </div>
      </div>
    </div>
  )
}

export default UserRequests
