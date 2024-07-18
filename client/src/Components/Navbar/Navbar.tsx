import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='nav'>
        <div className="navbar">
            <div className="navbar_logo">ShopMe</div>
            <div className="navbar_menu">
                <div className="navbar_menuItem">SOLUTIONS</div>
                <div className="navbar_menuItem">PRICING</div>
                <div className="navbar_menuItem">RESOURCES</div>
            </div>
            <div className="navbar_Login">
                <span className="navbar_loginButton">Login</span>
                <span className="navbar_signupButton">Sign Up</span>
            </div>
        </div>
    </div>
  )
}
