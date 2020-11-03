import React from 'react'
import { Container, List, Title } from './styles'
import { TypeIcon } from '..'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const multiplier = {
  doubleDamageFrom: 2,
  noDamageFrom: 0,
  halfDamageFrom: 0.5
}

const damageBreakPoint = {
  weak: value => value > 1,
  strong: value => value < 1 && value > 0,
  inmune: value => value == 0
}


const applyMultiplication = values => {
  const finalValues = {}

  values.forEach(({ type, multi })  => 
  finalValues[type] = finalValues.hasOwnProperty(type) ? finalValues[type] * multi : multi)

  return finalValues
}

const setRelationshipValues = (rel, damageReference) => {
  const multiplierValues = []
  rel && rel.forEach(({ types: { relation } }) => {
    Object.keys(relation).forEach(key => 
      relation && relation[key].forEach(item => {
        multiplierValues.push({multi: multiplier[key], type: item.name })
      }))
  })

  const finalValues = applyMultiplication(multiplierValues)

  return  Object.keys(finalValues).filter(key => 
    damageReference(finalValues[key])).map(name =>
      ({ multi: finalValues[name], type: name })
  )
}

const Details = ({ title, relations, damageReference }) => {
  const { t } = useTranslation('common')
  const damage = damageBreakPoint[damageReference]
  const types = setRelationshipValues(relations, damage)

  if(!types.length)
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