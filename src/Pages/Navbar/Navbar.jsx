import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='header'>
            <div className="navbar-logo">
                <NavLink to='/'>
                    <h2>
                        BlastCode
                    </h2>
                </NavLink>
            </div>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </nav>
            <span>
                <nav >
                    <ul className='navbar-list'>
                        <li><a href="#">For Candidates |</a></li>
                        <li><button className='btn-common btn-demo'>Request Demo</button></li>
                        <li><button className='btn-common btn-sign_up'>Sign up</button></li>
                    </ul>
                </nav>
            </span>
        </header>
    )
}

export default Navbar