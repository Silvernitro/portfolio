import React from 'react'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import Project from './Project'
import copy from '../copy/projects/copyProjects'

const Projects = () => (
  <Container>
    <SectionHeading>PROJECTS</SectionHeading>

    {copy.map(({
      projectTitle,
      date,
      content,
      buttons,
    }) => (
      <Project
        projectTitle={projectTitle}
        date={date}
        content={content}
        buttons={buttons}
      />
    ))}

  </Container>
)

export default Projects

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`
