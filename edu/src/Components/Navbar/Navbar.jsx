// import React from 'react';
import React, { Children, useState } from "react";
import './Navbar.css';
import user_icon from '../../assets/user_icon.png';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';


function Navbar() {


  return (
    <>

      <nav className='navcomp'>


        <img src={user_icon} alt="" className='logo' />


        <ul>
          <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
          {/* <li>Program</li> */}
          <li><NavLink className="nav-link" to=''>About Us</NavLink></li>
          <li><NavLink className="nav-link" to="/subpages">Contact</NavLink></li> {/* Open in a new tab */}
          <li><Button className='btn_edit'><NavLink className="nav-link" to='/pages/codepen'>Compiler</NavLink></Button></li>
          <li><Button className='btn_edit'><NavLink className="nav-link" to='/pages/elib'>eLibrary</NavLink></Button></li>
          {/* <li><NavLink className="nav-link" to=''>Editor</NavLink></li>
        <li><NavLink className="nav-link" to=''>eLibrary</NavLink></li> */}
        </ul>
        {/* <nav>{Children}</nav> */}
      </nav>
    </>


  );
}

export default Navbar;
