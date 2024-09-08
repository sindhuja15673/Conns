import React from 'react';
import "../Offers/Offers.css";
import "../Staycation/Staycation.css";
// import { IoIosArrowForward } from "react-icons/io";
import mat1 from "../../images/mat1.jpg";
import mat2 from "../../images/mat2.jpg";


const Mattress = () => {
    return (
        <div>
            <div className='of'>
                <h1>Save On Summer Nights</h1>
                <div className='summer'>
                    <h3>Shop Mattress-in-a-Box Starting at $679.99</h3>
                    <button className='butts'>Shop Patio</button>

                </div>
                <div className='offroom'>
                        <div><img src={mat1}></img>

                    <h3>Free Weighted Blanket + 2 Free Pillows</h3>
                    <h5>With Purchase Of Any Mattress $1499+</h5>
                    </div>
                        <div>
                        <img src={mat2}></img>

                    <h3>Free Adjustable Base Upgrade</h3>
                    <h5>With Any Mattress Purchase (In-Store Only)</h5>
                    
                        </div>
                    
                </div>

                
                
                {/* <button className='butt'>Shop Furniture <IoIosArrowForward /></button> */}
            </div>
        </div>
    );
}

export default Mattress;
