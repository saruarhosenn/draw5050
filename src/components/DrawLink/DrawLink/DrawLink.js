import React from 'react';
import DataTable from '../DataTable/DataTable';
import './DraLink.css';
const DrawLink = () => {
    return (
        <section className='deaw-link-section'>
            <div className="container">
                <div className="deaw-link-title">
                    <h2 className='text-capitalize'>current winner leaderboard</h2>
                </div>
                <DataTable></DataTable>
            </div>
        </section>
    );
};

export default DrawLink;