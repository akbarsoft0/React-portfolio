import React from 'react'
import './about.css'
// import { Socialmedia } from '../Socialmedia'
import SocialContacts from '../../commen/SocialContacts'



const About = () => {
    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left">
                                <h2>hello there! <br />
                                    i'am <span>mohammad akbar</span> <br />
                                    a fornt-end web developer.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className='img-fluid right' src={require('../../assets/about-img/about.png')} alt="img" />
                        </div>
                        <SocialContacts />

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
