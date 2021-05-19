import React from 'react'
import styled from 'styled-components'
import globalStyles from '../styles'

const SectionHeading = ({ children, style }) => (
  <Heading style={{ ...style }}>
    {children}
  </Heading>
)

export default SectionHeading

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.13em;
  color: ${globalStyles.PRI_COLOR};
`
