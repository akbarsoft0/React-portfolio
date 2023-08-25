import React, { useState } from 'react'
import './header.css'
import Web from './web/Web'
import Mob from './mob/Mob'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <header>
            <div className="container">
                <div className="nav">

                    <h1> <NavLink to="/">Mohammad Akbar</NavLink></h1>

                    <div className="menu">
                        <i className="fi fi-rs-apps apps" onClick={() => setisOpen(!isOpen)}></i>
                        <Web />
                        {isOpen && <Mob isOpen={isOpen} setisOpen={setisOpen} />}
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
