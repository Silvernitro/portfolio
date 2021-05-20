import React from 'react'
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

function App() {
  library.add(fab, faCheckSquare, faCoffee)

  return (
    <>
      <NavBar />
      <IntroBox />
      <Bio />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
