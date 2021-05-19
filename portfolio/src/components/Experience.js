import React from 'react'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import Text from './Text'

const Experience = () => (
  <Container>
    <SectionHeading>Experience</SectionHeading>

    <Body>

      <LeftSection>
        <ListText style={{ fontSize: '18px', 'margin-bottom': '10px' }}>January 2021 - Present</ListText>
        <ListText style={{ fontSize: '20px', fontWeight: '800' }}>
          Undergraduate Teaching Assistant
        </ListText>
      </LeftSection>

      <VerticalDivider />

      <RightSection>
        <ListText style={{ fontSize: '23px' }}>National University of Singapore</ListText>
        <ul>
          <li style={{ fontSize: '20px' }}>
            <ListText>
              Taught the School of Computing module: Programming Methodology II
            </ListText>
          </li>
          <li>
            <ListText>
              Conducted lessons to teach and guide students to complete weekly
              programming assignments
            </ListText>
          </li>
          <li>
            <ListText>
              Reviewed and gave feedback for code submissions
            </ListText>
          </li>
          <li>
            <ListText>
              Module content includes:
            </ListText>
            <ul>
              <li>
                <ListText>
                  Object-oriented programming principles
                </ListText>
              </li>
              <li>
                <ListText>
                  Functional programming principles
                </ListText>
              </li>
              <li>
                <ListText>
                  Java constructs
                </ListText>
              </li>
            </ul>
          </li>
        </ul>
      </RightSection>

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
  width: 70%;
  padding-left: 20%;
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`

const VerticalDivider = styled.div`
  width: 1px;
  background-color: #B0B0B0;
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`

const ListText = styled(Text)`
  line-height: 29px;
`
