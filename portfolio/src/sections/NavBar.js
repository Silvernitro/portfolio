import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import styles from '../styles'

const NavBar = ({ sections }) => {
  const navBarRef = useRef(null)
  const [activeSection, setActiveSection] = useState('')

  // helper fxn to get runtime dimensions of a DOM node
  const getDimensions = (ref) => {
    const { height } = ref.current.getBoundingClientRect()
    const elementTop = ref.current.offsetTop
    const elementBottom = elementTop + height

    return {
      height,
      elementTop,
      elementBottom,
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const { height: navBarHeight } = getDimensions(navBarRef)
      const currScrollY = window.scrollY + navBarHeight

      // check which section user is currently in
      const [currSection = ''] = Object.entries(sections).find(([key, ref]) => {
        const { elementTop, elementBottom } = getDimensions(ref)
        return currScrollY >= elementTop && currScrollY < elementBottom
      }) ?? []

      // only set state if section has changed!
      if (currSection !== activeSection) {
        setActiveSection(currSection)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection])

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
        <Button
          onClick={() => scrollToSection(sections.experienceRef)}
          isActive={activeSection === 'experienceRef'}
        >
          EXPERIENCE
        </Button>
        <Button
          onClick={() => scrollToSection(sections.educationRef)}
          isActive={activeSection === 'educationRef'}
        >
          EDUCATION
        </Button>
        <Button
          onClick={() => scrollToSection(sections.skillsRef)}
          isActive={activeSection === 'skillsRef'}
        >
          SKILLS
        </Button>
        <Button
          onClick={() => scrollToSection(sections.projectsRef)}
          isActive={activeSection === 'projectsRef'}
        >
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
  color: ${({ isActive }) => (isActive ? styles.ACTIVE_SECTION_COLOR : styles.PRI_COLOR)};
  cursor: pointer;

  &:hover {
    color: ${styles.ACTIVE_SECTION_COLOR};
  }
  transition: color 0.3s;
`
