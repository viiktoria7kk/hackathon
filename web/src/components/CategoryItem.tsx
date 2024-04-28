import { FC } from 'react'
import type { CategoryType } from '~/types'

type CategoryItemProps = {
  categoryItem: CategoryType
}

const CategoryItem: FC<CategoryItemProps> = ({ categoryItem }) => {
  const { image, title } = categoryItem
  return (
    <div className='flex items-center gap-x-10 bg-white rounded-xl shadow-md py-4 px-6 transition cursor-pointer hover:-translate-y-1'>
      <img alt={title} className='max-w-[70px] max-h-[75px]' src={image} />
      <h2 className='font-semibold text-xl text-foreground'>{title}</h2>
    </div>
  )
}

export default CategoryItem
