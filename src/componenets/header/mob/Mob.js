import React from 'react'
import './mob.css'

const Mob = ({ isOpen, setisOpen }) => {
    return (
        <>
            <ul className='mobile-menu'>
                <i className="fi fi-rs-circle-xmark x" onClick={() => setisOpen(!isOpen)}></i>
                <li><a href="#about">about</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#work">work</a></li>
                <li><a href="#contacts">contacts</a></li>
            </ul>
        </>
    )
}

export default Mob
