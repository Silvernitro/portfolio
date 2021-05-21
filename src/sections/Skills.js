import React from 'react'
import styled from 'styled-components'
import styles from '../styles'
import SectionHeading from '../components/SectionHeading'
import Text from '../components/Text'

const LANGUAGES = ['Javascript', 'Java', 'C', 'Python', 'SQL']
const FRONTEND = ['ReactJS', 'React Native', 'Redux']
const BACKEND = ['NodeJS', 'ExpressJS', 'MongoDB', 'PostgreSQL', 'GraphQL']
const CREATIVE = ['Adobe Photoshop Lightroom', 'Adobe Photoshop']

const Skills = ({ refProp }) => (
  <Container ref={refProp}>
    <SectionHeading style={{ color: 'inherit', marginBottom: '40px' }}>
      Skills
    </SectionHeading>

    <Body>
      <Column isLeft={true}>

        <ColumnHeading>
          Programming
        </ColumnHeading>

        <ColumnSubheading>
          Languages
        </ColumnSubheading>
        <ul>
          {LANGUAGES.map((l) => (
            <ListItem>
              <ListText>
                {l}
              </ListText>
            </ListItem>
          ))}
        </ul>

        <ColumnSubheading>
          Frontend Development
        </ColumnSubheading>
        <ul>
          {FRONTEND.map((l) => (
            <ListItem>
              <ListText>
                {l}
              </ListText>
            </ListItem>
          ))}
        </ul>

        <ColumnSubheading>
          Backend Development
        </ColumnSubheading>
        <ul>
          {BACKEND.map((l) => (
            <ListItem>
              <ListText>
                {l}
              </ListText>
            </ListItem>
          ))}
        </ul>

      </Column>

      <Column>
        <ColumnHeading>
          Creative
        </ColumnHeading>

        <ul style={{ margin: '0 0' }}>
          {CREATIVE.map((l) => (
            <ListItem>
              <ListText>
                {l}
              </ListText>
            </ListItem>
          ))}
        </ul>

      </Column>
    </Body>
  </Container>
)

export default Skills

const Container = styled.section`
  background-color: ${styles.SKILLS_COLOR};
  color: white;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 100px;
`

const Body = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`

const Column = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding-right: ${({isLeft}) => isLeft ? '20%' : '0'};

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`

const ColumnHeading = styled(Text)`
  color: white;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 20px;
  }
`

const ColumnSubheading = styled(Text)`
  color: white;
  font-weight: 600;
`

const ListItem = styled.li`
  font-size: 18px;
`

const ListText = styled(Text)`
  line-height: 26px;
  color: white;
`
