import React from 'react';
import './Newslatter.css'
const Newslatter = () => {
    return (
        <section className="newsletter-section">
			<div className="container">
				<div className="newsletter-title text-center">
					<h2>Newsletter</h2>
				</div>
				<form className="newsletter-form">
					<div className="newsletter-fild d-sm-flex">
						<input type="email" name="" id="" placeholder="Your Email" />
						<button type="submit" className="d-block">SUBSCRIBE →</button>
					</div>
				</form>
			</div>
		</section>
    );
};

export default Newslatter;