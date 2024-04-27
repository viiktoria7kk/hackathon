import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '~/components/Select'

const CategorySelect = () => {
  return (
    <Select>
      <SelectTrigger className='max-w-[180px] text-lg focus-visible:ring-1 focus-visible:ring-offset-1 '>
        <SelectValue placeholder='Категорії' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Категорії</SelectLabel>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default CategorySelect
