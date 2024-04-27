import { SearchIcon } from 'lucide-react'

import CategorySelect from '~/containers/CategorySelect'
import { Input } from '~/components/Input'
import { Button } from '~/components/Button'

const Search = () => {
  return (
    <div className='flex gap-1 items-center bg-white px-5 py-3 rounded-xl shadow-md'>
      <CategorySelect />
      <Input
        className='border-none text-lg focus-visible:ring-0 focus-visible:ring-offset-0'
        placeholder='Введіть назву запиту'
      />
      <Button>
        <SearchIcon />
      </Button>
    </div>
  )
}

export default Search
