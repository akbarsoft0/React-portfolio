import React, { useState } from 'react'
import '../css/header.css'
import { NavLink } from 'react-router-dom'
import MenuWebview from '../../section-cards/js/MenuWebview'
import MenuMobile from '../../section-cards/js/MenuMobile'

const Header = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <header>
            <div className="container">
                <div className="mynav">
                    <h2><NavLink to="/">Mohammad Akbar</NavLink></h2>
                    <div className="menu">
                        <i className="fi fi-rs-apps apps" onClick={() => setisOpen(!isOpen)}></i>
                        <MenuWebview />
                        {isOpen && <MenuMobile isOpen={isOpen} setisOpen={setisOpen} />}
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header
