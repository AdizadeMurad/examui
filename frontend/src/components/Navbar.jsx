import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
    return (
        <>
            <nav className='hero'>
                <div className='general-navbar'>
                <div className='pulse'>
                    <p>Pulse</p>
                </div>
                <div>
                    <ul className='general'>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link><li>About Us</li></Link>
                        <Link><li>Resturant</li></Link>
                        <Link to={'/admin'}><li>Admin</li></Link>
                        <Link to={'/add'}><li>Add</li></Link>
                    </ul>
                </div>
                <div className='reservations'>
                    <p>Reservations</p>
                    <p><i class="fa-solid fa-phone"></i>652-345 3222 11</p></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar