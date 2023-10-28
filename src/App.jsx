import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Education from './Pages/Education'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProjectDisplay from './Pages/ProjectDisplay'

function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDisplay/>}/>
        <Route path='/education' element={<Education />} />
        <Route path='/About' element={< About/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
