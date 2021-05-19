import React from 'react'
import styled from 'styled-components'
import styles from '../styles'

const SquareButton = ({ text, href, style }) => (
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
    <Square>
      {text}
    </Square>
  </a>

)

export default SquareButton

const Square = styled.div`
  border: 1px solid ${styles.PRI_COLOR};
  padding: 8px 25px;

  &:hover {
    background-color: ${styles.PRI_COLOR};
    color: white;
  }

  transition: all 0.2s;
`
