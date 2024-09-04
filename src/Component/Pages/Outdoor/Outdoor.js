import React from 'react';
import "../Outdoor/Outdoor.css";

import outdoor1 from "../../../images/outdoor1.jpg";
import outdoor2 from "../../../images/outdoor2.jpg";
import patio1 from "../../../images/patio1.webp";
import patio2 from "../../../images/patio2.webp";
import patio3 from "../../../images/patio3.webp";
import patio4 from "../../../images/patio4.webp";
import bike1 from "../../../images/bikes1.jpg";
import bike2 from "../../../images/bikes2.jpg";
import { Link } from 'react-router-dom';



const Outdoor = () => {
    return (
        <div>
            <div><h1>Outdoor</h1></div>
            <div>
            <div className='outdoor' ><h1>Shop Lawn Mowers in Select Markets</h1></div>
            <div className="bimgs">
            <div className='bimgs1'><img src={outdoor1}></img></div>
                <div className='bimgs2'>
                    <h1>Create Your Outdoor Oasis</h1>
                    <p> Whether You Want To Play, Relax, Or Dine In The Fresh Air, We've Got You Covered. The Great Outdoors Just Got Greater!</p>
                    
                </div>
                
            </div>
            </div>
            <div>
            <div style={{textAlign:"center"}}><h1>Outdoor Living & Patio</h1></div>
            
            <div className="dimg">
                
                <div className='dimg2'>
                    <h1>Your Relaxation Destination</h1>
                    <p>Just Add Sunshine</p>
                    <div className='dbut1'><a><Link style={{textDecoration:"none", color:"white"}} to='/patio'>Shop Patio Set</Link></a></div>
                </div>
                <div className='dimg1'><img src={outdoor2}></img></div>
            </div>
            
            </div>
            <div className="dsimg">
           
                
                <div className='dsimg2'>
                <div><img src={patio1}></img>
                <h4>Patio Chairs</h4></div>
                <div><img src={patio2}></img><h4>Patio Tables</h4>
                </div>
                <div><img src={patio3}></img><h4>Patio Dining Set</h4>
                </div>
                <div><img src={patio4}></img><h4>Patio Umbrellas</h4>
                </div>
                </div>
                <div className='dbut'><a>Shop All Patio</a></div>
            </div>
            <div className="dmsimg">
            <h1>Toys and Bikes </h1>
                
                <div className='dmsimg2'>
                <div><img src={bike1}></img>
                <h4>Bikes</h4></div>
                <div><img src={bike2}></img><h4>Scooters</h4>
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default Outdoor;
