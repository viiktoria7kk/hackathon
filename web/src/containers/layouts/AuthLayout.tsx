import { FC, Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Wrapper from '~/containers/layouts/Wrapper'
import Loader from '~/components/Loader'
import { useUserStore } from '~/store/userStore'
import { Routes } from '~/constants/routes'

const AuthLayout: FC = () => {
  const user = useUserStore((state) => state.user)
  const navigate = useNavigate()
  console.log(user)
  if (user) {
    navigate(Routes.HOME)
    return null
  }
  return (
    <Wrapper variant='auth'>
      <Suspense fallback={<Loader variant='pageLoader' />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  )
}

export default AuthLayout
