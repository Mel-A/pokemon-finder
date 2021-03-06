import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'

const GET_POKEMON_INFO_BY_NAME = gql`
  query getPokemon($name: String!) {
    pokemon @rest(type: "Pokemon", path: $name) {
      name
      abilities
      image: sprites {
        front: front_default
      }
      types {
        type
      }
    }
  }
`
const useApi = () => {

  const [ pokemon, setPokemon ] = useState(null)
  const [ getPokemon, { loading, data, called } ] = useLazyQuery(GET_POKEMON_INFO_BY_NAME, {
    onCompleted: data => setPokemon(data.pokemon),
    fetchPolicy: 'network-only'
  })

  const setData = name => {
    name && getPokemon({ variables: { name: `pokemon/${name}` } })
  }

  return [ { pokemon, called }, setData ]
}

export default useApi