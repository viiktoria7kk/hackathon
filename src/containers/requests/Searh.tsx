import { SearchIcon } from 'lucide-react'

import CategorySelect from '~/containers/CategorySelect'
import { Input } from '~/components/Input'
import { Button } from '~/components/Button'
import { FC, useState } from 'react'

type SearchProps = {
  setSearchTerm: (searchTerm: string) => void
  searchTerm: string
}

const Search: FC<SearchProps> = ({ setSearchTerm, searchTerm }) => {
  const [inputValue, setInputValue] = useState(searchTerm)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    if (event.target.value === '') {
      setSearchTerm('')
    }
  }
  const handleSearchClick = () => {
    setSearchTerm(inputValue)
  }

  return (
    <div className='flex gap-1 items-center bg-white px-5 py-3 rounded-xl shadow-md'>
      <CategorySelect />
      <Input
        className='border-none text-lg focus-visible:ring-0 focus-visible:ring-offset-0'
        onChange={handleInputChange}
        placeholder='Введіть назву запиту'
        value={inputValue}
      />
      <Button onClick={handleSearchClick}>
        <SearchIcon />
      </Button>
    </div>
  )
}

export default Search
