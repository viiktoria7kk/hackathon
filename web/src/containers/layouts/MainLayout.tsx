import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '~/containers/layouts/Header'
import Wrapper from '~/containers/layouts/Wrapper'
import Footer from '~/containers/layouts/Footer'

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Wrapper className='relative flex flex-col min-h-screen'>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  )
}

export default MainLayout
