import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles'

const MobileNavBar = ({ sections }) => {
  const navBarRef = useRef(null)
  const [isMenuActive, setIsMenuActive] = useState(false)

  const scrollToSection = (ref) => {
    window.scrollTo({
      // note the offset due to sticky top navbar
      top: ref.current.offsetTop - navBarRef.current.offsetHeight,
      behavior: 'smooth',
    })
    setIsMenuActive(false)
  }

  return (
    <Container>
      <NavBarContainer ref={navBarRef}>
        <Name>
          Lau Siaw Sam
        </Name>
        <MobileMenuButton
          icon={faBars}
          onClick={() => setIsMenuActive(prev => !prev)}
          isActive={isMenuActive}
        />
      </NavBarContainer>

      <NavMenu isActive={isMenuActive}>
        <Button
          onClick={() => scrollToSection(sections.experienceRef)}
        >
          EXPERIENCE
        </Button>
        <Button
          onClick={() => scrollToSection(sections.educationRef)}
        >
          EDUCATION
        </Button>
        <Button
          onClick={() => scrollToSection(sections.skillsRef)}
        >
          SKILLS
        </Button>
        <Button
          onClick={() => scrollToSection(sections.projectsRef)}
        >
          PROJECTS
        </Button>
      </NavMenu>

    </Container>
  )
}

export default MobileNavBar

const Container = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: white;

  @media (min-width: 768px) {
    display: none;
  }
`

const NavBarContainer = styled.header`
  height: 50px;
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.div`
  display: flex;
  align-items: center;

  font-size: 30px;
  color: ${styles.PRI_COLOR};
  cursor: pointer;
`

const NavMenu = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;

  background-color: white;

  /* note: hidden visibility must be used with absolute positioning here */
  visibility: ${({isActive}) => isActive ? 'visible' : 'hidden'};
  opacity: ${({isActive}) => isActive ? '1' : '0'};
  transition: all 0.25s;
`

const MobileMenuButton = styled(FontAwesomeIcon)`
  color: ${({isActive}) => isActive ? styles.ACTIVE_SECTION_COLOR : styles.PRI_COLOR};
  font-size: 30px;

  transition: color 0.1s;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;

  font-size: 20px;
  color: ${styles.PRI_COLOR};
  cursor: pointer;

  &:hover {
    color: ${styles.ACTIVE_SECTION_COLOR};
  }
`
