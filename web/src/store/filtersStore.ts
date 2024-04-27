import { create } from 'zustand'

type FiltersStore = {
  category: string | undefined
  searchTerm: string
  setCategory: (category: string) => void
  setSearchTerm: (searchTerm: string) => void
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  category: undefined,
  searchTerm: '',
  setCategory: (category) => set({ category }),
  setSearchTerm: (searchTerm) => set({ searchTerm })
}))
