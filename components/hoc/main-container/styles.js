import styled from 'styled-components'

export const Error = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.red};
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url('/background.jpg');
  height: 100vh;
`