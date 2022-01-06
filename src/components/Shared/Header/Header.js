import React from 'react';
import './Header.css';
import logo from "../../../images/hero-img.png";
import { NavLink } from 'react-router-dom';

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

const Header = () => {
    return (
       <header className='d-none d-sm-block'>
           <nav className="navbar navbar-expand-md">
                <div className="container">
                    <div className="logo">
                        <a className="navbar-brand" href="avascript:void(0)">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    {/* Toggle Nav Icon */}
                    <div class="nav-icon navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Main Menu */}
                    <div className="main-menu collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/drawlink" className="nav-link" >Draw Link</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" >Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/privacypolicy" className="nav-link" >Privacy Policy</NavLink>
                            </li>                          
                        </ul>
                    </div>
                </div>
            </nav>
       </header>
    );
};

export default Header;