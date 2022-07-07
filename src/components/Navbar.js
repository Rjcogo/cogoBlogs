import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image1.jpeg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
            <p><img height={50} width={0.1} src={logo} alt="" classsName="logo"></img>BLOGS</p>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}