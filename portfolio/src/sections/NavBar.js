import React from 'react'
import styled from 'styled-components'
import styles from '../styles'

const NavBar = () => (
  <Container>
    <Name>
      Lau Siaw Sam
    </Name>
    <NavButtons>
      <Button>
        EXPERIENCE
      </Button>
      <Button>
        EDUCATION
      </Button>
      <Button>
        PROJECTS
      </Button>
      <Button>
        SKILLS
      </Button>
    </NavButtons>
  </Container>
)

export default NavBar

const Container = styled.div`
  padding: 20px 30px 20px 50px;
  display: flex;
  justify-content: space-between;
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
  padding: 10px 30px;

  font-size: 14px;
  color: ${styles.PRI_COLOR}
`
