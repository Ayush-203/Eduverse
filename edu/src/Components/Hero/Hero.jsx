import React from 'react'

import './Hero.css'
import ad from '../../assets/ad.png'
import admin from '../../assets/admin.png'
import { BrowserRouter, Link } from 'react-router-dom'
import AboutUs from '../Subpages/About'
import Courses from '../Subpages/Courses'
import Chooseus from '../Subpages/Chooseus'

import Navbar from '../Navbar/Navbar'
import Sidebar from './Sidebar'







function Hero() {

  // const handleButtonClick = () => {
  //   navigate('/'); // Navigate to the /second route
  // };


  const handleButtonClick_voice = () => {
    navigate('/'); // Navigate to the /second route
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scrolling animation
    });
  };







  return (
    <>
      {/* SIDE-NAVBAR COMPONENT */}





      {/* <Navbar /> */}
      <Sidebar>


















        {/* BODY COMPONENT */}
        <div className='hero'>
          <div className="hero-text">
            <h1 className='head'>We Ensure education for a better world</h1>
            <p>Our curriculum is meticulously crafted to inspire curiosity, foster critical thinking, and empower students to excel in a rapidly evolving world. With a focus on hands-on learning, real-world applications, and personalized support, we ensure that every student receives a well-rounded education that prepares them for success in any endeavor.</p>

            <button className='btn btnstu'><Link className='student' to="/">Student DashBoard<img src={admin} alt="" /></Link></button>
            <button className='btn btnreg'><Link className='reg' to="/">Registration<img src={admin} alt="" /></Link></button>
            <button className='btn btnatt'><Link className='attendence' to="/pages/attend">E-Attendance<img src={ad} alt="" /></Link></button>

          </div>



          {/* 
          <button className="navigate-button" onClick={handleButtonClick}><Link className='chat' to="/"></Link></button> */}
          <button className="navigate-button" ><Link className='chat' to="/"></Link></button>
          <button className="navigate-button_voice" onClick={handleButtonClick_voice}><Link className='voice' to="/"></Link></button>
          <button className="top-scroll" onClick={scrollToTop}></button>
        </div>

        <AboutUs />
        <Courses />
        <Chooseus />
      </Sidebar>


    </>




  )
}

export default Hero;
