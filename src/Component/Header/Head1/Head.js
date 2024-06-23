import React from 'react';
import "../Head1/Head.css";
import {Link} from 'react-router-dom';
const Head = () => {
    return (
        <div className='head'>
            <div className='list'>Save Up to 40% on Refrigerators</div>
            <ul className='ul'>
                <li className='li'><Link to="/order">Order Tracking</Link></li>
                <li className='li'><strong>Need Help?</strong> 1-877-358-1252</li>
                <li className='li'>Enable Accessibility</li>
                <li className=' li'>En espanol</li>
            </ul>
            
            
        </div>
    );
}

export default Head;
