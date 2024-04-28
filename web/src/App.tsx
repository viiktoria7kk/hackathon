import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import { useUserStore } from './store/userStore'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-[#F1F0F0]'>
      <Outlet />
      <Toaster position='top-center' />
    </div>
  )
}

export default App
