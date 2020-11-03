import React, { useCallback, useState, useEffect } from 'react'
import useApi from './api'
import { Button, Container } from './styles'
import { Details } from '../..'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const TypeRelationships = ({ types }) => {
  const [ { data }, setData ] = useApi(null)
  const [ relations, setRelations ] = useState("")
  const { t } = useTranslation('common')

  const handleClick = useCallback( async types => {
    const mainType = types[0] && types[0].type.name
    const secondType = types[1] && types[1].type.name
    await setData(mainType)
    await setData(secondType)
  })

  useEffect(() => {
    data && setRelations(relations => [...relations, data]);
  }, [ data ]);

  return (
    <Container>
      
      {relations ? <Container>
        <Details title="relations.show-weakness" relations={relations} damageReference="weak" />
        <Details title="relations.show-strengths" relations={relations} damageReference="strong" />
        <Details title="relations.show-inmunity" relations={relations} damageReference="inmune" />
      </Container> : 
      <Button onClick={() => handleClick(types)}>{t('relations.show-items')}</Button>
      }
    </Container>
  )
}

TypeRelationships.propTypes = {
  types: PropTypes.array.isRequired
}

export default TypeRelationships