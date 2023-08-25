import React from 'react'
import './about.css'
import SocialContacts from '../../commen/SocialContacts'
import Sepretor from '../../commen/Sepretor'

const About = () => {
    return (
        <>
            <section id="about">
                <div className="container">
                    <Sepretor />
                    <h3 className='page-title'>about me</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-text">
                                <span>hello everyone!</span>
                                <h1>i'm mohammad akbar</h1>
                                <h5>Front-End Web Developer</h5>
                                <p>I'm an experienced Front-End Web Developer skilled in HTML, CSS, and JavaScript.
                                    I excel at creating user-friendly, visually appealing websites that drive business results
                                    through effective collaboration and a deep understanding of design and user preferences
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className='img-fluid right' src={require('../../assets/about-img/about.png')} alt="img" />
                        </div>
                        <div className="col-lg-10">
                            <div className="links">

                            </div>
                        </div>
                        <SocialContacts />

                    </div>
                </div>
            </section >
        </>
    )
}

export default About
