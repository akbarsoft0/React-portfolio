import React from 'react'
import '../css/mob.css'
import { NavLink } from 'react-router-dom'


const MenuMobile = ({ isOpen, setisOpen }) => {
    return (
        <>
            <ul className='mobile-menu'>
                <i className="fi fi-rs-circle-xmark x" onClick={() => setisOpen(!isOpen)}></i>
                <li><NavLink to="/">about</NavLink></li>
                <li><NavLink to="/projects">projects</NavLink></li>
                <li><NavLink to="/skills">skills</NavLink></li>
                <li><NavLink to="/work">work</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
        </>
    )
}

export default MenuMobile
