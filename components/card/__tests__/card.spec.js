import { mount } from 'enzyme'
import Card from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../theme'

const dummyData = {
  name: 'name',
  image: { front: 'image' },
  types: [
    { type: { name: 'data' }}
    ]
}

describe('Card', () => {

  it('Card renders theme correctly', () => {
    const button = mount(<Card {...dummyData} />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
  })
})