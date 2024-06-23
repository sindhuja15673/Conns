import React from 'react';
import "../Category/Category.css";
import { IoIosArrowForward } from "react-icons/io";
import washer from "../../images/washer.webp";
import refridge from "../../images/refrigerator.webp";
import tv2 from "../../images/TV1.webp";
import bed from "../../images/bed.webp";
import sofa2 from "../../images/sofa2.webp";
import computer from "../../images/laptop.webp";
import laptop from "../../images/MQKP.webp";
import game from "../../images/game.webp";
import dining from "../../images/dining.webp";
import mattress from "../../images/mattress1.webp";
import sofa3 from "../../images/sofa3.webp";
import dishwash from "../../images/dishwasher.webp";
import ranges from "../../images/ranges.webp";
import conns from "../../images/conns-homeplus.jpg";
import samsung from "../../images/samsung.webp";

const Category = () => {
    return (
        <div>
            <div className='categ'>
                <h1 className='title3'>Featured Categories</h1>
                <div className='category'>
                    <div ><a><img className='cateimg' src={washer}></img>
                    <br></br><h4>Washers and dryers</h4></a></div>
                    <div><a><img className='cateimg' src={refridge}></img>
                    <br></br><h4>Refrigerators</h4></a></div>
                    <div><a><img className='cateimg' src={tv2}></img>
                    <br></br><h4>TVs</h4></a></div>
                    <div><a><img className='cateimg' src={bed}></img>
                    <br></br><h4>BedRoom</h4></a></div>
                    <div><a><img className='cateimg' src={sofa2}></img>
                    <br></br><h4>Living Room</h4></a></div>
                    <div><a><img className='cateimg' src={computer}></img>
                    <br></br><h4>Computer</h4></a></div>
                    <div><a><img className='cateimg' src={laptop}></img>
                    <br></br><h4>Apple Computers</h4></a></div>
                    <div><a><img className='cateimg' src={game}></img>
                    <br></br><h4>Gaming Consoles</h4></a></div>
                    <div><a><img className='cateimg' src={dining}></img>
                    <br></br><h4>Dining Room</h4></a></div>
                    <div><a><img className='cateimg' src={mattress}></img>
                    <br></br><h4>Mattresses</h4></a></div>
                    <div><a><img className='cateimg' src={sofa3}></img>
                    <br></br><h4>Sectionals</h4></a></div>
                    <div><a><img className='cateimg' src={dishwash}></img>
                    <br></br><h4>Dishwashers</h4></a></div>
                    <div><a><img className='cateimg' src={ranges}></img>
                    <br></br><h4>Ranges</h4></a></div>
                    <div className='circle'>
                       
                        <a>Latest Deals</a>
                    </div>
                    <div className='circle'>
                        <a>Clearance</a>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className='promo'>
                    <div className='samimg1'>

                    <img src={conns} className='pro'></img><h3 className='conpro'>PROMOTIONAL FINANCING</h3>
                    <h3>36 Months No Interest† on All Samsung Appliances & Select Samsung TVsa</h3>
                    <h6>†With your Conn's HomePlus credit card between 5/16/24 and 6/18/24. Equal monthly payments required for 36 months.<a>See details.</a></h6>
                    <button className='butt1'>Shop Samsung Appliances <IoIosArrowForward /></button>
                    <button className='butt'>Shop Samsung TVs <IoIosArrowForward /></button>
                    </div>
                    <div className='samimg'>
                        <img className='sam' src={samsung}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
