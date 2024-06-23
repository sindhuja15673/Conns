import React from 'react';
import "../Product/Product.css";
import computer from "../../images/computer.jpg";
import appliance from "../../images/appliance.jpg";
import fridge from "../../images/Fridge.png";
import sofa from "../../images/sofa.webp";
import tvs from "../../images/tv s.png";
import matress from "../../images/matress.webp";
import tv from "../../images/tv.png";
import { Link } from 'react-router-dom';


const Product = () => {
    return (
        <div>
            <div className='productoff'>

            <div className='offer'>
                <a>
                    <img className='img1'  src={tv}></img>
                    
                </a>
                <div><a className='details'>See Details</a></div>
            </div>
            <div className='offer'>
                <a>
                    <img className='img1' src={computer}></img>
                </a>
                <div><a className='details'>See Details</a></div>
            </div>
            <div className='offer'>
                <a>
                    <img className='img1' src={appliance}></img>
                </a>
                <div><a className='details'>See Details</a></div>
            </div>
            </div>
            <div className='productlist'>
                <div className='product'>
                    <span className='top'>Top Sellers</span>
                    <div className='toppro'><Link to="/cart">View Cart</Link></div>
                </div>
                <div className='product'>
                    
                <div className='title2'><span className='color'><strong>Love it Today,</strong><span className='red'><strong>Get it Fast</strong></span></span></div>
                <div className='producttype'>
                    <div className='app'>
                        <a><img className='appliance' src={fridge}></img></a>
                        <span>Appliances</span>
                    </div>
                    <div className='app'>
                        <a><img className='appliance' src={sofa}></img></a>
                        <span>Furnitures</span>
                    </div>
                    <div className='app'>
                        <a><img className='appliance' src={tvs}></img></a>
                        <span>TVs</span>
                    </div>
                    <div className='app'>
                        <a><img className='appliance' src={matress}></img></a>
                        <span>Mattresses</span>
                    </div>
                </div>
                <br></br>
                
                <div className='sub'>Subject to availability, qualifying purchases, and select days. <a href='' className='click'>Click here</a> for details.</div>
                </div>
                <div className='product'>

                    <div>
                    <span className='conns'>CONN'S SPECIAL FINANCING</span>
                    <div className='interest'>48 Months No Interest1</div>
                    <div className='but'>Prequalify Now</div>
                    <br></br>
                    <div className='line'>On Qualifying Purchases $7000 or More.</div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Product;
