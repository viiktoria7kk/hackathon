import { useEffect } from 'react'
import Banner from '~/containers/home/Banner'
import Categories from '~/containers/home/Categories'
import FAQContainer from '~/containers/home/FAQ'
import Wrapper from '~/containers/layouts/Wrapper'
import { useUserStore } from '~/store/userStore'

const Home = () => {
  const { accessToken } = useUserStore()
  useEffect(() => {
    console.log(accessToken)
  }, [accessToken])

  return (
    <Wrapper variant='page'>
      <Categories />
      <Banner />
      <FAQContainer />
    </Wrapper>
  )
}

export default Home
