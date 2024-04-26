import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Wrapper from '~/containers/layouts/Wrapper'

const AuthLayout: FC = () => {
  return (
    <Wrapper className='relative flex flex-col items-center justify-center min-h-screen'>
      <Outlet />
    </Wrapper>
  )
}

export default AuthLayout
