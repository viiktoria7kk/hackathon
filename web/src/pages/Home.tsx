import Banner from '~/containers/home/Banner'
import Categories from '~/containers/home/Categories'
import FAQContainer from '~/containers/home/FAQ'
import Wrapper from '~/containers/layouts/Wrapper'

const Home = () => {
  return (
    <Wrapper variant='page'>
      <Categories />
      <Banner />
      <FAQContainer />
    </Wrapper>
  )
}

export default Home
