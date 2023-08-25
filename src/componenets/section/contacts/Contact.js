import React from 'react'
import "./contact.css"
import Sepretor from '../../commen/Sepretor'
import SocialContacts from '../../commen/SocialContacts'


const Contact = () => {
    return (
        <section id='contact'>
            <div className="container">
                <Sepretor />
                <h2>contact</h2>
                <div className="contact-info">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="c-left">
                                <a className='myBtn' href={require('../../assets/resume/resume-white.pdf')} download={'Akbar resume'}>
                                    <i className="fi fi-ss-down-to-line"></i> download my resume</a>
                                <h4>want to get in touch? <br /> contact me on any platform</h4>
                                <SocialContacts />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form name="subscribe" method="POST" data-netlify="true">
                                <input type="text" name="name" placeholder="enter your full name" />
                                <input type="number" name="phone" placeholder="enter your phone number" />
                                <input type="email" name="email" id="email" placeholder="enter your mail id" />
                                <textarea name="message" id="message" cols="30" rows="6" placeholder="enter your message"></textarea>
                                <button type='submit' className='myBtn'>submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Contact
