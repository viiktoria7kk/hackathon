import { FC } from 'react'

import { cn } from '~/utils'
import { Button, buttonVariants } from '~/components/Button'
import { BannerItemType } from '~/types'

type BannerCardProps = {
  bannerCard: BannerItemType
}

const BannerCard: FC<BannerCardProps> = ({ bannerCard }) => {
  const { title, description, image, path, isUser } = bannerCard
  return (
    <div className='flex flex-col gap-4 items-center justify-around bg-white rounded-md shadow-md p-10 w-[560px] h-[470px]'>
      <img alt={title} className='max-w-[140px] max-h-[140px]' src={image} />
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-foreground text-xl mb-3 font-semibold'>{title}</h3>
        <p className='text-center text-lg font-normal'>{description}</p>
      </div>
      <Button
        className={cn(buttonVariants({ size: 'lg' }), 'text-base', {
          'bg-red-600 hover:bg-red-600/90': !isUser
        })}
      >
        Зареєструся як {isUser ? 'користувач' : 'волонтер'}
      </Button>
    </div>
  )
}

export default BannerCard
