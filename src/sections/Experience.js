import React from "react";
import styled from "styled-components";
import SectionHeading from "../components/SectionHeading";
import Text from "../components/Text";
import TA from "../copy/experiences/TA";
import Abillion from "../copy/experiences/Abillion";
import AbillionTwo from "../copy/experiences/AbillionTwo";
import WonderWorkshop from "../copy/experiences/WonderWorkshop";

const SingleExperience = ({
  date,
  roleTitle,
  location,
  title,
  content,
  isLast,
}) => (
  <>
    <ExperienceContainer>
      <LeftSection>
        <Text style={{ fontSize: "18px", "margin-bottom": "10px" }}>
          {date}
        </Text>
        <Text style={{ fontSize: "20px", fontWeight: "800" }}>{roleTitle}</Text>
        <Text style={{ "margin-top": "10px" }}>{location}</Text>
      </LeftSection>

      <VerticalDivider />

      <RightSection>
        <Text style={{ fontSize: "23px" }}>{title}</Text>
        {content}
      </RightSection>
    </ExperienceContainer>

    <MobileContainer isLast={isLast}>
      <TopSection>
        <Text style={{ fontSize: "18px", "margin-bottom": "10px" }}>
          {date}
        </Text>
        <Text style={{ fontSize: "20px", fontWeight: "800" }}>{roleTitle}</Text>
      </TopSection>

      <BottomSection>
        <Text style={{ fontSize: "23px" }}>{title}</Text>
        {content}
      </BottomSection>
    </MobileContainer>
  </>
);

const Experience = ({ refProp }) => (
  <Container ref={refProp}>
    <SectionHeading style={{ marginBottom: "60px" }}>Experience</SectionHeading>

    <Body>
      <SingleExperience
        date="July 2021 - Present"
        roleTitle="Software Engineer Intern"
        title="Wonder Workshop"
        location="California, United States"
        content={<WonderWorkshop />}
      />

      <SingleExperience
        date="May 2021 - July 2021"
        roleTitle="Software Engineer Intern"
        title="abillion"
        location="Singapore"
        content={<AbillionTwo />}
      />

      <SingleExperience
        date="January 2021 - May 2021"
        roleTitle="Undergraduate Teaching Assistant"
        title="National University of Singapore"
        location="Singapore"
        content={<TA />}
      />

      <SingleExperience
        date="May 2020 - August 2020"
        roleTitle="Software Engineer Intern"
        title="abillion"
        location="Singapore"
        content={<Abillion />}
        isLast={true}
      />
    </Body>
  </Container>
);

export default Experience;

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
    display: none;
  }
`;

const LeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding-top: 50px;
  text-align: right;
`;

const VerticalDivider = styled.div`
  width: 1px;
  background-color: #b0b0b0;
`;

const RightSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  padding-top: 50px;
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ isLast }) => (isLast ? "0" : "30px")};

  @media (min-width: 768px) {
    display: none;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;
