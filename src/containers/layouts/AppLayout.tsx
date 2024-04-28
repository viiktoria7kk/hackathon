import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '~/containers/layouts/Header'
import Wrapper from '~/containers/layouts/Wrapper'
import Footer from '~/containers/layouts/Footer'
import Loader from '~/components/Loader'

const AppLayout: FC = () => {
  return (
    <>
      <Header />
      <Wrapper variant='app'>
        <Suspense fallback={<Loader variant='pageLoader' />}>
          <Outlet />
        </Suspense>
      </Wrapper>
      <Footer />
    </>
  )
}

export default AppLayout
