import React from 'react'
import './App.css'
import Header from './componenets/header/Header'
import Footer from './componenets/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './componenets/section/about/About'
import Projects from './componenets/section/projects/Projects'
import Skills from './componenets/section/skills/Skills'
import Work from './componenets/section/work/Work'
import Contact from './componenets/section/contacts/Contact'

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
