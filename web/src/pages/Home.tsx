import Banner from '~/containers/Home/Banner'
import Categories from '~/containers/Home/Categories'
import FAQContainer from '~/containers/Home/FAQ'

const Home = () => {
  return (
    <div className='flex flex-col gap-y-10'>
      <Categories />
      <Banner />
      <FAQContainer />
    </div>
  )
}

export default Home
