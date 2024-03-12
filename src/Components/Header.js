import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div>
      <h1>Family Wellness</h1>
      <h6>MASSAGE THERAPY</h6>
      <nav>
        <ul>
            <li className='active'><a className='active' href='/'>HOME</a></li>
            <li><a href='/'>ABOUT</a></li>
            <li><a href='/'>SERVICES</a></li>
            <li><a href='/'>FAQ</a></li>
            <li><a href='/'>CONTACT</a></li>
        </ul>
      </nav>
    </div>
  )
}
