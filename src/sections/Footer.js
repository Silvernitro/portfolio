import React from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import styles from '../styles'

const Footer = () => (
  <Container>
    <FooterText>
      {'© 2021 By Lau Siaw Sam. '}
      <Link
        as="a"
        href="https://github.com/Silvernitro/portfolio"
        rel="noreferrer noopener"
        target="_blank"
      >
        View this website's code
      </Link>
    </FooterText>
  </Container>
)

export default Footer

const Container = styled.footer`
  width: 100%;
  padding: 15px 0px 15px 0px;
  display: flex;
  justify-content: center;
`

const FooterText = styled(Text)`
  font-size: 14px;
`

const Link = styled(FooterText)`
  &:hover {
    color: ${styles.HOVER_COLOR};
  }
  transition: color 0.2s;
`
