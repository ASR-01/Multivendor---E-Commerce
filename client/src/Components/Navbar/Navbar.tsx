import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

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
          <span
            className="navbar_loginButton"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
          <span
            className="navbar_signupButton"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}
