import React from 'react'

import { SearchContext } from '../context/search'

export function useSearch() {
  const context = React.useContext(SearchContext)

  if (!context) {
    throw new Error('useSearch must be used inside SearchContext.Provider')
  }

  return context
}
