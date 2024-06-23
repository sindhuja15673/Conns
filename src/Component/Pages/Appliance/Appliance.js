import React from 'react';
import "../Appliance/Appliance.css";
import app from "../../../images/appliances.jpg";
import Category from "../../Category/Category";
import Brand from '../../Brand/Brand';

const Appliance = () => {
    return (
        <div>
            <div>
            <div className="aimg">

                <div className='aimg2'>
                    <h1>Good credit or building credit, Conn’s HomePlus will work with you!</h1>
                    <p>With so many financing options, we have a payment option for everyone to get you the products you want for your lifestyle.</p>
                    <div className='appbut1'>Prequalify Now</div>
                </div>
                <div className='aimg1'><img src={app}></img></div>
            </div>
            </div>
            <Category/>
            <Brand/>
            <div className='applist'>
            <h5>Shop Appliances</h5>
<p>Whether you're upgrading, shopping deals or outfitting a new kitchen, Conn's HomePlus has the full selection of home appliancs you need. Shop Conn's HomePlus appliances online to pick your products and talk to us about appliance financing through our Conn's HomePlus Financing program for the best appliance deals. Prequalify online and you can get an answer today* Want to see our appliances in person? Visit your local Conn's HomePlus to browse our selection.

*Online prequalification only. Subject to credit approval.<br></br>

Refrigerators can be centerpieces of the kitchen, whether you go with a counter-depth, side-by-side or French door style.<br></br>

Washers keep the modern home clean and functional. Explore our selection of front-loading, top-loading, or even twin-loading washers onlin to learn more.<br></br>

Dryers in our selection include electric-steam, energy-efficient and high-capacity models from top brands, in a variety of colorful styles.<br></br>

Stackable laundry centers save space without sacrificing convenience, giving you all the perks of in-home laundry capabilities in less square footage.<br></br>

Dishwashers keep your dishes clean and your kitchen routine efficient. Shop our selection to find dishwashers with LED displays, sanitizing settings, adjustable racks and flexibile configurations to suit you.</p>
            </div>

            <br></br>
        </div>
    );
}

export default Appliance;
