import React from 'react'
import { Container, Image, ImageBackground, Title, TypesSection } from './styles'
import { TypeIcon } from '..'
import PropTypes from 'prop-types'

const Card = ({ name, image, types }) => {
  return (
    <Container>
      <ImageBackground>
        <Image src={image && image.front} />
      </ImageBackground>
      <Title>{name}</Title>
      <TypesSection>
        {types && types.map((item, index) => 
          <TypeIcon key={index} name={item.type.name} />
        )}
      </TypesSection>
    </Container>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  types: PropTypes.array.isRequired
}

export default Card