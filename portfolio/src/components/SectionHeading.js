import React from 'react'
import styled from 'styled-components'
import globalStyles from '../styles'

const SectionHeading = ({ children, styles }) => (
  <Heading style={{ ...styles }}>
    {children}
  </Heading>
)

export default SectionHeading

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${globalStyles.PRI_COLOR};
`
