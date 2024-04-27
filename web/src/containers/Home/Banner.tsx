import BannerCard from '~/components/BannerCard'
import { banners } from '~/containers/home/constants'

const Banner = () => {
  const bannerCards = banners.map((bannerCard) => (
    <BannerCard bannerCard={bannerCard} key={bannerCard.title} />
  ))
  return (
    <div className='mt-6 bg-gray-200 p-10 flex flex-grow items-center gap-8 rounded-xl'>
      {bannerCards}
    </div>
  )
}

export default Banner
