import React, { useRef } from 'react'
import styled from 'styled-components'
import styles from '../styles'

const NavBar = ({ sections }) => {
  const navBarRef = useRef(null)

  const scrollToSection = (ref) => {
    window.scrollTo({
      // note the offset due to sticky top navbar
      top: ref.current.offsetTop - navBarRef.current.offsetHeight,
      behavior: 'smooth',
    })
  }

  return (
    <Container ref={navBarRef}>
      <Name>
        Lau Siaw Sam
      </Name>
      <NavButtons>
        <Button onClick={() => scrollToSection(sections.experienceRef)}>
          EXPERIENCE
        </Button>
        <Button onClick={() => scrollToSection(sections.educationRef)}>
          EDUCATION
        </Button>
        <Button onClick={() => scrollToSection(sections.skillsRef)}>
          SKILLS
        </Button>
        <Button onClick={() => scrollToSection(sections.projectsRef)}>
          PROJECTS
        </Button>
      </NavButtons>
    </Container>
  )
}

export default NavBar

const Container = styled.header`
  height: 50px;
  padding: 10px 30px 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
`

const Name = styled.div`
  display: flex;
  align-items: center;

  font-size: 30px;
  color: ${styles.PRI_COLOR}
`

const NavButtons = styled.div`
  display: flex;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;

  font-size: 14px;
  color: ${styles.PRI_COLOR};
  cursor: pointer;
`
