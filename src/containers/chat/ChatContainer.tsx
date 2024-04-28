import { useEffect, useRef, useState } from 'react'
import { Socket } from 'socket.io-client'
import io from 'socket.io-client'

import { Button } from '~/components/Button'
import { chatList } from '~/constants/chat'
import { ChatMessage } from '~/types'

const ChatBody = () => {
  const [messages, setMessages] = useState<ChatMessage[] | []>(chatList)
  const [value, setValue] = useState<string>('')
  const [userId, setUserId] = useState<string | null>(null)
  const chatContainer = useRef<HTMLDivElement | null>(null)
  const socket = useRef<Socket | null>(null)

  const onScrollToBottom = () => {
    const scrollHeight = chatContainer.current?.scrollHeight
    const height = chatContainer.current?.clientHeight
    const maxScrollTop = scrollHeight ? scrollHeight - height! : 0
    chatContainer.current?.scrollTo(0, maxScrollTop)
  }

  useEffect(() => {
    socket.current = io(import.meta.env.VITE_HOST_URL as string)
    setUserId(localStorage.getItem('user_id'))

    socket.current.on('response', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, JSON.parse(message)])
    })

    return () => {
      socket.current?.disconnect()
    }
  }, [])

  useEffect(() => {
    onScrollToBottom()
  }, [messages])

  const onSendMessage = () => {
    const data = {
      userId: userId,
      message: value
    }
    socket.current?.emit('message', JSON.stringify(data))
    setValue('')
  }

  return (
    <div className='w-4/5 bg-white'>
      <div
        className='w-full h-full max-h-[450px] overflow-y-auto'
        ref={chatContainer}
      >
        <div>
          {chatList.map((message) => {
            return (
              <div
                className={`flex  items-center p-4 ${message.userId === userId ? 'justify-end' : 'justify-start'}`}
                key={message.id}
              >
                {message.userId === userId ? null : (
                  <img
                    alt={`${message.name} avatar`}
                    className='w-12 h-12 rounded-full'
                    src={message.avatar}
                  />
                )}
                <div className='ml-4 flex flex-col max-w-[450px]'>
                  <h1 className='text-foreground font-bold'>{message.name}</h1>
                  <p className='text-gray-400'>{message.message}</p>
                  <p className='text-gray-400 mt-2'>{message.time}</p>
                </div>
                {message.userId === userId ? (
                  <img
                    alt={`${message.name} avatar`}
                    className='ml-4 w-12 h-12 rounded-full'
                    src={message.avatar}
                  />
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
      <div className='w-full flex items-center gap-4 justify-center my-4'>
        <input
          className='w-3/4 p-4 bg-blue-100 border-t border-white rounded-md'
          onChange={(e) => setValue(e.target.value)}
          placeholder='Type your message here...'
          value={value}
        />
        <Button onClick={() => onSendMessage()} size={'lg'}>
          Send
        </Button>
      </div>
    </div>
  )
}

export default ChatBody
