import React from 'react'
import styled from 'styled-components'
import styles from '../styles'
import Text from './Text'

const SquareButton = ({ text, href, isFirst, style }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    style={{
      textDecoration: 'none',
      color: 'inherit',
      ...style,
    }}
  >
    <Square isFirst={isFirst}>
      <ButtonText>
        {text}
      </ButtonText>
    </Square>
  </a>

)

export default SquareButton

const Square = styled.div`
  border: 1px solid ${styles.PRI_COLOR};
  padding: 8px 25px;
  margin-left: ${({isFirst}) => isFirst ? '0' : '30px'};

  &:hover {
    background-color: ${styles.PRI_COLOR};
    color: white;
  }

  transition: all 0.2s;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: ${({isFirst}) => isFirst ? '0' : '20px'};
  }
`

const ButtonText = styled(Text)`
  text-align: center;
  color: inherit;
`
