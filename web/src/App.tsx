import { Outlet } from 'react-router-dom'
import Wrapper from '~/containers/layouts/Wrapper'
import Header from '~/containers/layouts/Header'
import Footer from '~/containers/layouts/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Wrapper className='relative flex flex-col min-h-screen -full'>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  )
}

export default App
