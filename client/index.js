import { ApolloClient, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'


const restLink = new RestLink({
  uri: 'https://pokeapi.co/api/v2/'
})

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})