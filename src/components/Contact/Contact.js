import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section>
            <div className="container">
                <div className="contact-title text-center">
                    <h2>Contact Us</h2>
                    <p className='text-uppercase mt-3'>have questions? get in touch</p>
                </div>
                <div className='form-area'>
                    <form className="row g-3 g-md-4">
                        <div className="col-md-6">
                            <div className="form-field">
                                <input className="form-control form-control-lg" type="text" placeholder="First Name" aria-label="default input example" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-field">
                                <input className="form-control form-control-lg" type="text" placeholder="Last Name" aria-label="default input example" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-field">
                                <input className="form-control form-control-lg" type="email" placeholder="Email" aria-label="default input example" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-field">
                                <input className="form-control form-control-lg" type="tel" placeholder="Phone" aria-label="default input example" required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-field">
                                <textarea className="form-control form-control-lg" placeholder="Type your message here..." id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-btn">
                                <button type="submit" className='w-100 d-block rounded-pill'>SUBMIT →</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;