import Banner from '~/containers/home/Banner'
import Categories from '~/containers/home/Categories'
import FAQContainer from '~/containers/home/FAQ'
import Wrapper from '~/containers/layouts/Wrapper'
import Intro from '~/components/Intro'

const Home = () => {
  const isHome = window.location.pathname === '/'

  return (
    <Wrapper variant='page'>
      <Intro isHome={isHome}>
        <h2 className='text-white font-semibold text-4xl'>
          Змінюй {''}
          <span className='font-bold text-4xl text-sky-400'>світ {''}</span>
          навколо {''}
          <span className='font-bold text-4xl text-sky-400'>ceбe</span>
        </h2>
        <h3 className='text-2xl text-white font-medium max-w-[560px] mt-6 mb-10'>
          Покажи, що{' '}
          <span className='font-bold text-2xl text-sky-400'>твоя допомога</span>{' '}
          може зробити різницю, i{' '}
          <span className='font-bold text-2xl text-sky-400'>
            отримай підтримку та вдячність
          </span>{' '}
          від тих, кому ти допомагаєш.
        </h3>
      </Intro>
      <Categories />
      {localStorage.getItem('USER_ID') ? null : <Banner />}
      <FAQContainer />
    </Wrapper>
  )
}

export default Home
