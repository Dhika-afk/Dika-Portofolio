import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './App.css'

const App = () => ( 
    <div id='top' className='dark app'>
      <Header />
        <Routes>
            <Route index element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/> 
            <Route path='/skill' element={<Skills/>}/> 
            <Route path='/contact' element={<Contact/>}/> 
        </Routes>


      <Footer />
    </div>
  )

export default App