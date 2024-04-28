import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Routes } from '~/constants/routes'
import { user } from '~/store/userStore'
import ChatBody from './ChatContainer'

const ChatContainer = () => {
  const { avatar, firstName, lastName, phone } = user
  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <header className='w-4/5 h-full flex items-start justify-between bg-zinc-300 p-8'>
        <Link className='text-white' to={Routes.CHATS}>
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
            src={avatar!}
          />
        </div>
      </header>
      <ChatBody />
    </div>
  )
}

export default ChatContainer
