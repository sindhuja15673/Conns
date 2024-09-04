import React from 'react';
import "../Offers/Offers.css";
import { IoIosArrowForward } from "react-icons/io";
import shop1 from "../../images/shop1.jpg";
import shop2 from "../../images/shop2.jpg";


const Offers = () => {
    return (
        <div>
            <div className='of'>
                <h1>We're Just Getting Warmed Up</h1>
                <div className='offroom'>
                        <div><img src={shop1}></img>
                    <br></br>

                    <h3>Keeping Cool is No Sweat</h3>
                    <h5>Shop Air Conditioners Starting At $249.99</h5>
                    </div>
                        <div>
                        <img src={shop2}></img>

                        <br></br>

                    <h3>Make the Great Outdoors Greater</h3>
                    <h5>Shop Lawn Mowers In Select Markets</h5>
                        </div>
                    
                </div>
                <button className='butt' id='butt'>Shop Appliance <IoIosArrowForward /></button>

                
            </div>
        </div>
    );
}

export default Offers;
