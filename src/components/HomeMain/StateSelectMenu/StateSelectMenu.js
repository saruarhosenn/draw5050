import React from 'react';
import { Link } from 'react-router-dom';
import './StateSelectMenu.css'
const StateSelectMenu = () => {
    return (
        <section className=''>
            <div class="container">
                <select class="select-item-form">
                    <option selected>Select Province Here</option>
                    <option value="$50">Lorem ipsum dolor sit.</option>
                    <option value="$50">Lorem ipsum dolor sit.</option>
                    <option value="$50">Lorem ipsum dolor sit.</option>
                    <option value="$50">Lorem ipsum dolor sit.</option>
                    <option value="$50">Lorem ipsum dolor sit.</option>
                    <option value="$50">Lorem ipsum dolor sit.</option>
                    <option value="$50">Lorem ipsum dolor sit.</option>
                    <option value="$50">Lorem ipsum dolor sit.</option>
                </select>
                <div className="select-btn-area text-center mt-5">
                    <Link to="/services" className="select-btn px-5 py-2 rounded">Go →</Link>
                </div>
	        </div>
        </section>
    );
};

export default StateSelectMenu;