import React from 'react'
import { Form, Input, Button } from './styles'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const SearchBox = ({ setData }) => {
  const { t } = useTranslation('common')

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target.parentElement
    const name = form.elements.name.value
    const nameToSend = name && name.toLowerCase();
    nameToSend && setData(nameToSend)
  }

  return (
    <Form onSubmit={e => e.preventDefault()} >
      <Input name='name' placeholder={t('search-box.type')} />
      <Button type='button' onClick={e => handleSubmit(e)} >{t('search-box.search')}</Button>
    </Form>
  )
}

SearchBox.propTypes = {
  setData: PropTypes.func.isRequired
}

export default SearchBox