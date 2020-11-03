import { useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'

const GET_TYPES_RELATIONSHIPS = gql`
  query getTypes($type: String!,) {
    types @rest(type: "Type", path: $type) {
    relation: damage_relations {
      doubleDamageFrom: double_damage_from { 
        name
      }
      noDamageFrom: no_damage_from {
        name
      }
      halfDamageFrom: half_damage_from {
        name
      }
    }
  }
}
`

const useApi = () => {
  const [ getTypes, { called, data } ] = useLazyQuery(GET_TYPES_RELATIONSHIPS, {
    fetchPolicy: 'network-only'
  })
  
  const setData = path => path && getTypes({ variables: { type: `type/${path}`} })
  
  return [ { data, called }, setData ]
}

export default useApi