import React from 'react';
import hero_img from "../../../images/hero-img.png";
import './Banner.css'
const Banner = () => {
    return (
        <section className='banner-section'>
            {/* Hero Content */}
            <div className="container">
                <div className="hero-content text-center">
                    <div className="hero-img">
                        <img src={hero_img} alt="hero_img" />
                    </div>
                    <div className="hero-text mt-4">
                        <h2>The one and only stop for every 50/50 draw</h2>
                    </div>
                </div>
            </div>

            {/* Bottom Shape */}
            <div class="custom-shape-divider-bottom-1641230450">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default Banner;

