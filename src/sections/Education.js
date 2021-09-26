import React from "react";
import styled from "styled-components";
import SectionHeading from "../components/SectionHeading";
import Text from "../components/Text";
import SquareButton from "../components/SquareButton";

const Education = ({ refProp }) => (
  <Container ref={refProp}>
    <SectionHeading style={{ marginBottom: "60px" }}>Education</SectionHeading>

    <Body>
      <ExperienceContainer>
        <LeftSection>
          <Text
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            August 2019 - Present
          </Text>
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "800",
              lineHeight: "1.25em",
            }}
          >
            Bachelor of Computing (Honours) in Computer Science
          </Text>
        </LeftSection>

        <VerticalDivider />

        <RightSection>
          <Text style={{ fontSize: "23px" }}>
            National University of Singapore
          </Text>

          <ul>
            <ListItem>
              <ListText>Dean's List (top 5%)</ListText>
              <ul>
                <ListItem>
                  <ListText>Spring 2021</ListText>
                </ListItem>
                <ListItem>
                  <ListText>Fall 2020</ListText>
                </ListItem>
              </ul>
            </ListItem>
            <ListItem>
              <ListText>
                Cumulative Average Point: <b>4.89/5.00</b>
              </ListText>
            </ListItem>
            <ListItem>
              <ListText>
                NUS Overseas Colleges (NOC) programme - Silicon Valley
              </ListText>
            </ListItem>
            <ListItem>
              <ListText>Graduating in May 2023</ListText>
            </ListItem>
          </ul>
          <SquareButton
            text="Transcript"
            href="https://drive.google.com/file/d/1hg-d_1pRSnOJvt0cvk29A1hKP7nE98k3/view?usp=sharing"
            isFirst
            style={{ alignSelf: "flex-start" }}
          />
        </RightSection>
      </ExperienceContainer>
    </Body>
  </Container>
);

export default Education;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  padding-left: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const LeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  text-align: right;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    margin-right: 0px;
  }
`;

const VerticalDivider = styled.div`
  width: 1px;
  background-color: #b0b0b0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    margin-top: 30px;
    margin-left: 0px;
  }
`;

const ListItem = styled.li`
  font-size: 18px;
`;

const ListText = styled(Text)`
  line-height: 26px;
`;
