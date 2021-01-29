import React, { useState } from 'react'

interface ISearchContext {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchContext = React.createContext<ISearchContext | null>(null)
SearchContext.displayName = 'SearchContext'

function SearchProvider({ children }: { children: JSX.Element }) {
  const [query, setQuery] = useState('')

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider }
