import { FC } from 'react'
import { categories } from '~/containers/Home/constants'
import CategoryItem from '~/containers/Home/categories/CategoryItem'

const Categories: FC = () => {
  const categoriesList = categories.map((categoryItem, i) => (
    <CategoryItem categoryItem={categoryItem} key={i} />
  ))

  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h2 className='text-3xl font-bold text-foreground'>
        Чим ви хочете допомогти?
      </h2>
      <ul className='w-full grid grid-cols-2 gap-y-8 gap-x-10'>
        {categoriesList}
      </ul>
    </div>
  )
}

export default Categories
