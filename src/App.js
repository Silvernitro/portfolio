import React, { useRef } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import NavBar from './sections/NavBar'
import IntroBox from './sections/IntroBox'
import Bio from './sections/Bio'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  library.add(fab, faCheckSquare, faCoffee)
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <NavBar
        sections={{
          experienceRef, educationRef, skillsRef, projectsRef,
        }}
      />
      <IntroBox />
      <Bio />
      <Experience refProp={experienceRef} />
      <Education refProp={educationRef} />
      <Skills refProp={skillsRef} />
      <Projects refProp={projectsRef} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
