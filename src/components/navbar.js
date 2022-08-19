import React from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-child-1'>
            <img src="logomain.png" className='nav-img' alt="logo"/>
        </div>
        <div className='navbar-child-2'>
            <Link className='nav-links' to="/">Home</Link>
            <Link className='nav-links' to="/about">About</Link>
            <Link className='nav-links' to="/contact">Contact</Link>
        </div>
        <div className='navbar-child-3'>
            <Link className=' form-btn' to="/form">User Details</Link>
        </div>
      
    </div>
  )
}


export {Navbar};