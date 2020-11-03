import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.nobel};
  padding: 10px 20px;
  border-radius: 8px;
  margin: 10px;
  box-sizing: border-box;
`
export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.sunset};
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`