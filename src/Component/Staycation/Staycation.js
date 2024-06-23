import React from 'react';
import "../Offers/Offers.css";
import "../Staycation/Staycation.css";
import { IoIosArrowForward } from "react-icons/io";
import stay1 from "../../images/stay1.jpg";
import stay2 from "../../images/stay2.jpg";
import stay3 from "../../images/stay3.jpg";
import stay4 from "../../images/stay4.jpg";
import stay5 from "../../images/stay5.jpg";
import stay6 from "../../images/stay6.jpg";

const Offers = () => {
    return (
        <div>
            <br></br>
            <div className='of'>
                <h1>Summer Staycation Savings</h1>
                <div className='summer'>
                    <h3>Bring Your Outdoor Oasis to Life</h3>
                    <button className='butts'>Shop Patio</button>

                </div>
                <div className='offroom'>
                        <div><img src={stay1}></img>

                    <h3>Hot Furniture Deals</h3>
                    </div>
                        <div>
                        <img src={stay2}></img>

                    <h3>Top New Furniture Looks </h3>
                    
                        </div>
                    
                </div>

                <div className='offimg1'>
                    <div><img src={stay3}></img>
                    <h3>Living Room Sets</h3>
                    <h5>Starting At $1,399.99</h5></div>
                    <div><img src={stay4}></img>
                    
                    <h3>Sectionals</h3>
                    <h5>Starting At $1,199.99</h5></div>
                    <div><img src={stay5}></img>
                    
                    <h3>Bedroom Sets</h3>
                    <h5>Starting At $999.99</h5></div>
                    <div><img src={stay6}></img>
                    
                    <h3>Dining Room</h3>
                    <h5>Starting At $799.99</h5></div>
                    
                </div>
                
                <button className='butt'>Shop Furniture <IoIosArrowForward /></button>
            </div>
        </div>
    );
}

export default Offers;
