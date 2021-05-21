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
      <Date>{date}</Date>

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
              isFirst={idx === 0}
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

  @media (max-width: 768px) {
    width: 90%;
  }
`

const ProjectTitle = styled.h2`
  font-size: 25px;
  font-weight: 100;
  color: ${styles.PRI_COLOR};
`

const Body = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Date = styled(Text)`
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const VerticalDivider = styled.div`
  background-color: #2F2E2E;
  width: 3px;
  margin-left: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`

const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }
`
