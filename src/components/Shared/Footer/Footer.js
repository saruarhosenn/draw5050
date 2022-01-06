import React from 'react';
import './Footer.css';
import footer_logo from "../../../images/hero-img.png";
import facebook from "../../../images/facebook.svg";
import twitter from "../../../images/twitter.svg";
import instagram from "../../../images/instagram.svg";
import youtube from "../../../images/youtube.svg";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="container footer-main-content">
                <div className="row">
                    <div className="col-lg-2 mb-5 mb-lg-0">
                        <div className="footer-logo text-center">
                            <img src={footer_logo} alt="footer_logo" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-6 mb-5 mb-sm-0 ms-lg-auto">
                        <div className="pages-link ">
                            <h3 className='link-title text-white text-capitalize'>Pages Link</h3>
                            <ul className='mt-4'>
                                <li className='mb-2'>
                                    <Link to="/home" className='text-capitalize'>Home</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/drawlink" className='text-capitalize'>Draw Link</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/contact" className='text-capitalize'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/privacypolicy" className='text-capitalize'>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-6 mb-5 mb-sm-0">
                        <div className="pages-link ">
                            <h3 className='link-title text-white text-capitalize'>Pages Link</h3>
                            <ul className='mt-4'>
                                <li className='mb-2'>
                                    <Link to="/home" className='text-capitalize'>Home</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/drawlink" className='text-capitalize'>Draw Link</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/contact" className='text-capitalize'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/privacypolicy" className='text-capitalize'>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4">
                        <div className="social-links">
                            <h3 className='link-title text-white text-capitalize text-center text-sm-start'>Social Link</h3>
                            <ul className='d-flex align-items-center justify-content-center justify-content-sm-start mt-4'>
                                <li>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        <img src={instagram} alt="instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        <img src={youtube} alt="youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright-text text-center py-sm-4">
                <p className='text-capitalize'>Copyright &copy; 2022 Draw5050. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;