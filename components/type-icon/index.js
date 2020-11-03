import React from 'react'
import { Type, Icon } from './styles'
import PropTypes from 'prop-types'

const TypeIcon = ({ name }) => {
  return (
    <Type>
      <Icon src={`/${name}.png`} />
      {name}
    </Type>
  )
}

TypeIcon.propTypes = {
  name: PropTypes.string.isRequired
}

export default TypeIcon