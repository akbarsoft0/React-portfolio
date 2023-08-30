import React from 'react'
import "../css/contact.css"
import Sepretor from '../../section-cards/js/Sepretor'
import Social from '../../section-cards/js/Social'


const Contact = () => {

    return (
        <section id='contact'>
            <div className="container">
                <Sepretor />
                <h3 className='page-title'>contact</h3>
                <div className="contact-info">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-text">
                                <a className='myBtn' href={require('../../assets/resume/resume-white.pdf')} download={'Akbar resume'}>
                                    <i className="fi fi-ss-down-to-line"></i> download my resume</a>
                                <h4>want to get in touch? <br /> contact me on any platform</h4>
                                <Social />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* to connect form to netlify */}
                            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className='contact' action='/contact'>
                                {/* You still need to add the hidden input with the form name to your JSX form */}
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="text" name="name" id='name' placeholder="enter your full name" />
                                <input type="number" name="phone" id='phone' placeholder="enter your phone number" />
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
