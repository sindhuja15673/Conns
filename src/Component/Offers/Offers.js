import React from 'react';
import "../Offers/Offers.css";
import room1 from "../../images/room1.jpg";
import room2 from "../../images/room2.jpg";
import off1 from "../../images/off1.jpg";
import off2 from "../../images/off2.jpg";
import off3 from "../../images/off3.jpg";

const Offers = () => {
    return (
        <div>
            <div className='of'>
                <h1>Stay Cool, Stay Saving</h1>
                <div className='offroom'>
                        <div><img src={room1}></img>
                    <br></br>

                    <h3>Save Up to $500 on Samsung Appliance Packages</h3>
                    <h5>Buy 2=EXTRA $100 Off, Buy 3=EXTRA $250 Off Or Buy 4= $500 Off</h5>
                    </div>
                        <div>
                        <img src={room2}></img>

                        <br></br>

                    <h3>Save Up to $500 on Samsung Appliance Packages</h3>
                    <h5>Buy 2=EXTRA $100 Off, Buy 3=EXTRA $250 Off Or Buy 4= $500 Off</h5>
                        </div>
                    
                </div>
                <br></br>

                <div className='offimg'>
                    <div><img src={off1}></img>
                    <h3>Save Up to 35% On Appliance Package Deals</h3></div>
                    <div><img src={off2}></img>
                    
                    <h3>Save Up to 40% On Refrigerators</h3></div>
                    <div><img src={off3}></img>
                    
                    <h3>Extra $100 Off Select LG Laundry Pairs</h3></div>
                </div>
            </div>
        </div>
    );
}

export default Offers;
