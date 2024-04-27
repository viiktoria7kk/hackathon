import Banner from '~/containers/Home/Banner'
import Categories from '~/containers/Home/Categories'
import FAQContainer from '~/containers/Home/FAQ'
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
