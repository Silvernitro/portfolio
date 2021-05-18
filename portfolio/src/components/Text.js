import styled from 'styled-components'

const Text = styled.p`
  margin: 0;
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || '400'};
`

export default Text
