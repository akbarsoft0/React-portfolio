import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './componenets/sections/js/Header'
import Footer from './componenets/sections/js/Footer'
import About from './componenets/sections/js/About'
import Projects from './componenets/sections/js/Projects'
import Skills from './componenets/sections/js/Skills'
import Work from './componenets/sections/js/Work'
import Contact from './componenets/sections/js/Contact'

// import { Header, Footer, About, Projects, Skills, Work, Contact } from './componenets/sections/js'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
