import React from 'react'
import Logo from '../logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
        <img className='logo' src={Logo} alt="logo" />
        </div>
          <div className="links">
          <Link className='link' to='/'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h6>FOOD</h6>
          </Link>
          <span  className='link'>John</span>
          <span className='link'>Logout</span>
 
          <span className='link'>
          <Link className='write' to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
