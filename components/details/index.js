import React from 'react'
import { Container, List, Title } from './styles'
import { TypeIcon } from '..'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { applyMultiplication, damageBreakPoint, formatArray, returnValues } from '../../utils/multiplier'

const setRelationshipValues = (rel, damageReference) => {
  const damage = damageBreakPoint[damageReference]

  const multiplierValues = []
  rel && rel.forEach(({ types: { relation } }) => {
    formatArray(relation, multiplierValues)
  })

  return  returnValues(applyMultiplication(multiplierValues), damage)
}

const Details = ({ title, relations, damageReference }) => {
  const { t } = useTranslation('common')
  const types = setRelationshipValues(relations, damageReference)

  if(types && !types.length)
    return null 

  return (
    <Container>
      <Title>{t(title)}</Title>
      <List>
        {types.map((item, index) => 
          <TypeIcon key={index} name={item.type} />
        )}
      </List>
    </Container>
  )
}

Details.propTypes = {
  title: PropTypes.string.isRequired,
  relations: PropTypes.array.isRequired,
  damageReference: PropTypes.string.isRequired
}

export default Details