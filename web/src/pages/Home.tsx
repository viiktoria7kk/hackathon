import Banner from '~/containers/home/Banner'
import Categories from '~/containers/home/Categories'
import FAQContainer from '~/containers/home/FAQ'

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
