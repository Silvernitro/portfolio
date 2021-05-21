import React from 'react-dom'
import styled from 'styled-components'
import Text from '../components/Text'

const BodyText = ({ style, children }) => (
  <Text
    style={{
      fontSize: '18px',
      textAlign: 'center',
      lineHeight: '27px',
      color: 'black',
      ...style,
    }}
  >
    {children}
  </Text>
)

const Bio = () => (
  <Container>
    <Content>
      <BodyText style={{ marginBottom: '30px' }}>
        I am a Computer Science Undergraduate at the University of Singapore.
      </BodyText>

      <BodyText style={{ marginBottom: '30px' }}>
        {`I have experience in full-stack web development and am seeking to take on new challenges
        to make an impact on people's lifestyles through technology.`}
      </BodyText>

      <BodyText>
        I'm into:
      </BodyText>

      <BodyText>
        Coffee • Jazz • Photography • Sailing
      </BodyText>
    </Content>
  </Container>
)

export default Bio

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;

  @media (max-width: 768px) {
    padding: 50px 0px;
  }
`

const Content = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`
