import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import NavBar from './components/NavBar'
import IntroBox from './components/IntroBox'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'

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
    </>
  );
}

export default App;
