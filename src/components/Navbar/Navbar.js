import { Link } from 'react-router-dom'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {  about, projects, skills, contact } from '../../portfolio'

import './Navbar.css'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {about? (
          <li className='nav__list-item'>
            <Link to='/'
              onClick={toggleNavList}
              className='link link--nav'
            >
              About
            </Link>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <Link to='/projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </Link>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <Link to='/skill'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </Link>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <Link to='/contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </Link>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
