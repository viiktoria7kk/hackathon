import { FC } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '~/components/Select'
import { useFiltersStore } from '~/store/filtersStore'
import { Categories } from '~/containers/home/constants'

const CategorySelect: FC = () => {
  const categories = Object.values(Categories)

  const { setCategory } = useFiltersStore()

  return (
    <Select onValueChange={setCategory}>
      <SelectTrigger className='max-w-[250px] text-lg focus-visible:ring-1 focus-visible:ring-offset-1 '>
        <SelectValue placeholder='Категорії' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Категорії</SelectLabel>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default CategorySelect
