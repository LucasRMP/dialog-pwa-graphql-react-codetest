import { ApolloProvider } from '@apollo/client'
import React from 'react'

import Routes from './Routes'
import apolloClient from './services/client'
import GlobalStyles from './styles/global'
import { SearchProvider } from './context/search'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={apolloClient}>
        <SearchProvider>
          <Routes />
        </SearchProvider>
      </ApolloProvider>
    </>
  )
}

export default App
