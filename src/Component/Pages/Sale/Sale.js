import React from 'react';
import "../Outdoor/Outdoor.css";
import appliance from "../../../images/appliances.jpg";
import Category from '../../Category/Category';
import outdoor2 from "../../../images/outdoor2.jpg";
import sofa from "../../../images/stay1.jpg";
import tv from "../../../images/tvs2.jpg";
import bed1 from "../../../images/bed1.jpg";
import bed2 from "../../../images/bed2.jpg";
import bed3 from "../../../images/bed3.jpg";



const Sale = () => {
    return (
        <div>
            <div><h1>4th of July Sale</h1></div>
            <div>
            <div style={{textAlign:"center"}}><h1>United We Save</h1></div>
            
            <div className="dimg">
                
                <div className='dimg2'>
                    <h1>Your Relaxation Destination</h1>
                    <p>Just Add Sunshine</p>
                    <div className='dbut1'><a>Shop Patio Set</a></div>
                </div>
                <div className='dimg1'><img src={appliance}></img></div>
            </div>
            
            </div>
            <div className='tvss'>
                <div><div className='tv1'><img src={sofa}></img></div>
                <h3 style={{textAlign:"center"}}>Save 30% with TV & Soundbar Bundles</h3></div>
                <div><div className='tv2'><img src={tv}></img></div>
                <h3 style={{textAlign:"center"}}>Big Sounds, Big Savings Up to 30% Off</h3></div>
            </div>


            <div className="bmimg">
            <h1>Sleep Tight, The Deal is Right </h1>
                
                <div className='bmimg2'>
                <div><img src={bed1}></img>
                <h4>Free 55" TV</h4>
                <p>With Purchase Of Beautyrest Or Casper Mattress</p></div>
                <div className='bed2'><img  src={bed2}></img><h4>Free 65" TV</h4>
                <p>With Purchase Of Any Tempur-Pedic Or Stearns & Foster Mattress</p></div>
                <div><img src={bed3}></img><h4>Free Adjustable Base</h4>
                <p> With Any Mattress Purchase $1499+ (*Exclusions Apply)</p></div>
                </div>
            </div>
            <Category/>
            <br></br>
        </div>
    );
}

export default Sale;
