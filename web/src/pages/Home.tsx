import Banner from '~/containers/Home/banner/Banner'
import Categories from '~/containers/Home/categories/Categories'
import FAQContainer from '~/containers/Home/faq'

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
