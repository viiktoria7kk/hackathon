import { create } from 'zustand'

type FiltersStore = {
  category: string
  searchTerm: string
  setCategory: (category: string) => void
  setSearchTerm: (searchTerm: string) => void
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  category: 'all',
  searchTerm: '',
  setCategory: (category) => set({ category }),
  setSearchTerm: (searchTerm) => set({ searchTerm })
}))
