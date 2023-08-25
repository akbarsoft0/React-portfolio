import React from 'react'
import './web.css'
import { NavLink } from 'react-router-dom'

const Web = () => {
    return (
        <>
            <ul className='web-menu'>
                {/* <li><a href="#about">about</a></li> */}
                <li><NavLink to="/">about</NavLink></li>
                <li><NavLink to="/projects">projects</NavLink></li>
                <li><NavLink to="/skills">skills</NavLink></li>
                <li><NavLink to="/work">work</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
        </>
    )
}

export default Web
