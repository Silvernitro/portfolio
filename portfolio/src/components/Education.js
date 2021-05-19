import React from 'react'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import Text from './Text'

const Education = () => (
  <Container>
    <SectionHeading style={{ marginBottom: '60px' }}>
      Education
    </SectionHeading>

    <Body>
      <ExperienceContainer>

        <LeftSection>
          <Text style={{ fontSize: '18px', 'margin-bottom': '10px' }}>August 2019 - Present</Text>
          <Text style={{ fontSize: '20px', fontWeight: '800', lineHeight: '1.25em' }}>Bachelor of Computing (Honours) in Computer Science</Text>
        </LeftSection>

        <VerticalDivider />

        <RightSection>
          <Text style={{ fontSize: '23px' }}>National University of Singapore</Text>

          <ul>
            <ListItem>
              <ListText>
                Dean's List (top 5%) in Fall 2020
              </ListText>
            </ListItem>
            <ListItem>
              <ListText>
                Cumulative Average Point: 4.89/5.00
              </ListText>
            </ListItem>
            <ListItem>
              <ListText>
                On track to First Class Honours
              </ListText>
            </ListItem>
            <ListItem>
              <ListText>
                Graduating in May 2023
              </ListText>
            </ListItem>
          </ul>

        </RightSection>
      </ExperienceContainer>

    </Body>
  </Container>
)

export default Education

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`

const ExperienceContainer = styled.div`
  display: flex;
  padding-left: 10%;
`

const LeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`

const VerticalDivider = styled.div`
  width: 1px;
  background-color: #B0B0B0;
`

const RightSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`

const ListItem = styled.li`
  font-size: 18px;
`

const ListText = styled(Text)`
  line-height: 26px;
`
