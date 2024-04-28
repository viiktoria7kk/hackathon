import { Link } from 'react-router-dom'
import { userChats } from '~/constants/chat'

const ChatsSection = () => {
  return (
    <div>
      {userChats.map((chat) => {
        return (
          <Link
            className='flex items-center justify-between p-4 border-b border-gray-200'
            key={chat.id}
            to={`/chat/${chat.userId}`}
          >
            <div className='flex items-center'>
              <img
                alt='profile'
                className='w-12 h-12 rounded-full'
                src={chat.avatar}
              />
              <div className='ml-4'>
                <h1 className='text-lg font-semibold'>{chat.name}</h1>
                <p className='text-sm text-gray-500'>{chat.message}</p>
              </div>
            </div>
            <div>
              <p className='text-sm text-gray-500'>{chat.time}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ChatsSection
