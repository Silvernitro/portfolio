import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeading from '../components/SectionHeading'
import Text from '../components/Text'
import styles from '../styles'

const Contact = () => (
  <Container>
    <SectionHeading>
      CONTACT ME
    </SectionHeading>

    <Body>
      <Text style={{ marginTop: '20px', lineHeight: '1.5em' }}>Email:</Text>
      <Email as="a" href="mailto:lau.siawsam@u.nus.edu">lau.siawsam@u.nus.edu</Email>

      <SocialContainer>
        <a
          href="https://www.linkedin.com/in/lau-siaw-sam/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StyledIcon icon={['fab', 'linkedin']} />
        </a>
        <a
          href="https://github.com/Silvernitro"
          target="_blank"
          rel="noreferrer noopener"
          style={{ margin: '0px 15px 0px 15px' }}
        >
          <StyledIcon icon={['fab', 'github']} />
        </a>
        <a
          href="https://t.me/lausiawsam"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StyledIcon icon={['fab', 'telegram']} />
        </a>
      </SocialContainer>
    </Body>
  </Container>

)

export default Contact

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F1F1F1;
  padding-top: 40px;
  padding-bottom: 70px;
`

const Body = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Email = styled(Text)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${styles.HOVER_COLOR};
  }
  transition: all 0.1s;
`

const SocialContainer = styled.div`
  margin-top: 50px;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 30px;
  cursor: pointer;
`
