import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    console.error({ graphQLErrors })
  }

  forward(operation)
})

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URI || 'http://localhost:4000/graphql',
})

const apolloClient = new ApolloClient({
  link: from([httpLink, errorLink]),
  cache: new InMemoryCache(),
  credentials: 'include',
})

export default apolloClient
