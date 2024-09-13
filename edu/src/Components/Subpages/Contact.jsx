import React from 'react'
import './contact.css'
import Navbar from '../Navbar/Navbar'

function Contact() {
    return (
        <>
            <Navbar />
            <div className='body'>



                <div className="contact " >



                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471559.9002335208!2d88.12803756270945!3d22.576794791705975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272166e4cb263%3A0x27f12170efd9ddee!2sFuture%20Institute%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1714890553509!5m2!1sen!2sin"
                            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>




                    {/* .......................................................................... */}
                    <form action='https://formspree.io/f/mayrkogk' method='POST' className="contact-form">
                        <h2>Stay Connected With Us</h2>

                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Enter your message"></textarea>

                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact