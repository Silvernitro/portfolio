import React from 'react'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import Text from './Text'
import TA from './Experiences/TA'
import Abillion from './Experiences/Abillion'

const SingleExperience = ({
  date,
  roleTitle,
  title,
  content,
}) => (
  <ExperienceContainer>
    <LeftSection>
      <Text style={{ fontSize: '18px', 'margin-bottom': '10px' }}>{date}</Text>
      <Text style={{ fontSize: '20px', fontWeight: '800' }}>{roleTitle}</Text>
    </LeftSection>

    <VerticalDivider />

    <RightSection>
      <Text style={{ fontSize: '23px' }}>{title}</Text>
      {content}
    </RightSection>
  </ExperienceContainer>
)

const Experience = () => (
  <Container>
    <SectionHeading style={{ marginBottom: '60px' }}>Experience</SectionHeading>

    <Body>
      <SingleExperience
        date="January 2021 - May 2021"
        roleTitle="Undergraduate Teaching Assistant"
        title="National University of Singapore"
        content={<TA />}
      />

      <SingleExperience
        date="May 2020 - August 2020"
        roleTitle="Software Engineer Intern"
        title="abillion"
        content={<Abillion />}
      />
    </Body>

  </Container>
)

export default Experience

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding-top: 50px;
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
  padding-top: 50px;
`
