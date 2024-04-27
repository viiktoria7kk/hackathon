import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Wrapper from '~/containers/layouts/Wrapper'
import Loader from '~/components/Loader'

const AuthLayout: FC = () => {
  return (
    <Wrapper variant='auth'>
      <Suspense fallback={<Loader variant='pageLoader' />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  )
}

export default AuthLayout
