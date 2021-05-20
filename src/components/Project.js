import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import SquareButton from './SquareButton'
import styles from '../styles'

const Project = ({
  projectTitle,
  date,
  content,
  buttons,
}) => (
  <Container>
    <ProjectTitle>{projectTitle}</ProjectTitle>
    <Body>
      <Text style={{ width: '20%' }}>{date}</Text>

      <VerticalDivider />

      <Content>
        <ul style={{ margin: '0' }}>
          {content.map((copy) => (
            <ListItem>
              <ListText>
                {copy}
              </ListText>
            </ListItem>
          ))}
        </ul>

        <ButtonContainer>
          {buttons.map(({ text, url }, idx) => (
            <SquareButton
              text={text}
              href={url}
              style={{ marginLeft: idx === 0 ? '0px' : '30px' }}
            />
          ))}
        </ButtonContainer>

      </Content>
    </Body>
  </Container>
)

export default Project

const Container = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

const ProjectTitle = styled.h2`
  font-size: 25px;
  font-weight: 100;
  color: ${styles.PRI_COLOR};
`

const Body = styled.div`
  width: 100%;
  display: flex;
`

const VerticalDivider = styled.div`
  background-color: #2F2E2E;
  width: 3px;
  margin-left: 40px;
`

const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
`

const ListItem = styled.li`
  font-size: 18px;
`

const ListText = styled(Text)`
  line-height: 26px;
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 40px;
`
