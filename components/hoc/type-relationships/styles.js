import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`
export const Container = styled.div`
  width: 270px;
`