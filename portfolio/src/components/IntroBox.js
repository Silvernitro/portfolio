import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles'
import headshot from '../assets/headshot.webp'

const IntroBox = () => (
  <Container>
    <Box>
      <Image src={headshot} />

      <VerticalDivider />

      <Content>
        <ContentContainer>
          <Text style={{'fontSize': '30px', 'marginBottom': '10px'}}>Hi, I am Sam</Text>
          <Text style={{'fontWeight': '800', 'marginBottom': '30px'}}>Second Year Computer Science Undergraduate</Text>
          <Text style={{'fontWeight': '800', 'marginBottom': '10px'}}>Email:</Text>
          <Email as='a' href='mailto:lau.siawsam.u.nus.edu' style={{'letterSpacing': '0.05em'}}>lau.siawsam.u.nus.edu</Email>

          <a
            href='https://drive.google.com/file/d/1YkdjdK6pOXbzlgV7tetaRu-_XSdp34u7/view?usp=sharing'
            target='_blank'
            rel='noreferrer noopener'
            style={{'textDecoration': 'none'}}
          >
            <ResumeButton>
              My Resume
            </ResumeButton>
          </a>

          <SocialContainer>
            <a
              href='https://www.linkedin.com/in/lau-siaw-sam/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <StyledIcon icon={['fab', 'linkedin']} />
            </a>
            <a
              href='https://github.com/Silvernitro'
              target='_blank'
              rel='noreferrer noopener'
            >
              <StyledIcon icon={['fab', 'github']} />
            </a>
            <a
              href='https://t.me/lausiawsam'
              target='_blank'
              rel='noreferrer noopener'
            >
              <StyledIcon icon={['fab', 'telegram']} />
            </a>
          </SocialContainer>
        </ContentContainer>
      </Content>
    </Box>
  </Container>
)

export default IntroBox

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Box = styled.div`
  margin-top: 10vh;
  display: flex;
`

const Image = styled.img`
  width: 470px;
  height: 100%;
  object-fit: cover;
`

const VerticalDivider = styled.div`
  width: 2px;
`

const Content = styled.div`
  width: 470px;

  background-color: #F1F1F1;
  color: ${styles.PRI_COLOR};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`

const Email = styled(Text)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

const ResumeButton = styled.button`
  background-color: ${styles.PRI_COLOR};

  border: none;
  cursor: pointer;
  color: white;
  font-weight: 50;
  letter-spacing: 0.05em;

  display: flex;
  justify-content: center;
  padding: 10px 35px;
  margin-top: 80px;

  transition: background-color 0.15s;
  &:hover {
    background-color: ${styles.HOVER_COLOR};
  }
`

const SocialContainer = styled.div`
  margin-top: 50px;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 30px;
  margin-right: 15px;
  cursor: pointer;
`