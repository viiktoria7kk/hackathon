import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Routes } from '~/constants/routes'
import ChatBody from './ChatContainer'
import { user } from '~/store/userStore'
import { createUrlPath } from '~/utils'
// import { userService } from '~/services/user'
// import { useEffect, useState } from 'react'
// import { UserType } from '~/types'

const ChatContainer = () => {
  // const { id } = useParams<{ id: string }>()
  // const [userInfo, setUserInfo] = useState<UserType | null>(null)

  // useEffect(() => {
  //   if (id) {
  //     userService
  //       .getUser(id)
  //       .then((res) => {
  //         setUserInfo(res)
  //       })
  //       .catch((err) => {
  //         console.error(err)
  //       })
  //   }
  // }, [id])

  const { avatar, firstName, lastName, phone } = user
  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <header className='w-4/5 h-full flex items-start justify-between bg-zinc-300 p-8'>
        <Link
          className='text-white'
          to={createUrlPath(Routes.PROFILE, '', {
            tab: 'chats'
          })}
        >
          <ArrowLeft className='h-8 w-8' />
        </Link>
        <div className='ml-4 flex flex-col items-start justify-start'>
          <h1 className='text-xl font-bold text-foreground'>
            {firstName} {lastName}
          </h1>
          <Link
            className='text-gray-400 transition hover:text-gray-500'
            to={`tel:${phone}`}
          >
            {phone}
          </Link>
        </div>
        <div>
          <img
            alt={`${firstName} ${lastName} avatar`}
            className='w-20 h-20 rounded-full mx-auto'
            src={avatar || 'https://dummyimage.com/600x400/bebebe/fff'}
          />
        </div>
      </header>
      <ChatBody />
    </div>
  )
}

export default ChatContainer
