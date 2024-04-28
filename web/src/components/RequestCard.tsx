import { Link } from 'react-router-dom'
import { User2Icon } from 'lucide-react'

import { Button, buttonVariants } from '~/components/Button'
import { Badge } from '~/components/Badge'

import type { RequestType } from '~/types'

import { cn, createUrlPath, normalizeDate } from '~/utils'
import { Routes } from '~/constants/routes'

type RequestCardProps = {
  request: RequestType
}
const RequestCard = ({ request }: RequestCardProps) => {
  const { id, title, description, category, createdAt, user } = request

  return (
    <article className='bg-white rounded-md px-7 pt-4 pb-8 shadow-md transition'>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center text-zinc-400 text-sm'>
          <span className='flex gap-1 items-center'>
            <User2Icon size={24} />
            {user.firstName} {user.lastName}
          </span>
          <span>{normalizeDate(createdAt)}</span>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col basis-[80%] gap-1 '>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <div>
              <Badge>{category}</Badge>
            </div>
            <p className='line-clamp-3 pt-1'>{description}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <Button variant='outline'>Написати повідомлення</Button>
            <Link
              className={cn(buttonVariants())}
              to={createUrlPath(Routes.REQUESTS, id)}
            >
              Показати деталі
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default RequestCard
