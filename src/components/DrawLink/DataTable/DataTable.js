import React from 'react';
import { Link } from 'react-router-dom';
import './DataTable.css'
const DataTable = () => {
    return (
        <>
            <div class="table-responsive">
                <table class="table table-area">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Go</th> 
                        </tr>
                    </thead>
                    <tbody className='table-body-content'>
                        <tr>
                            <td className='text-capitalize'>HSN 50/50</td>
                            <td>$64656</td>
                            <td>
                                <Link to="/" className="deaw-link-btn px-4 py-2 rounded">Go</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-capitalize'>Timins</td>
                            <td>$64656</td>
                            <td>
                                <Link to="/" className="deaw-link-btn px-4 py-2 rounded">Go</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-capitalize'>Niagara</td>
                            <td>$64656</td>
                            <td>
                                <Link to="/" className="deaw-link-btn px-4 py-2 rounded">Go</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-capitalize'>Big Brothers</td>
                            <td>$64656</td>
                            <td>
                                <Link to="/" className="deaw-link-btn px-4 py-2 rounded">Go</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-center mt-5">
                <Link to="/" className='text-capitalize see-all-btn'>see all</Link>
            </div>
        </>
    );
};

export default DataTable;