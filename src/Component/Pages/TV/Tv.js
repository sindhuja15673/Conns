import React from 'react';
import "../TV/Tv.css";
import Category from "../../Category/Category";
import Brand from '../../Brand/Brand';
import tv from "../../../images/tvs1.jpg";
import tv1 from "../../../images/tvs2.jpg";
import tv2 from "../../../images/tvs3.jpg";
import tv3 from "../../../images/tv1.jpg";
import tv4 from "../../../images/tv2.jpg";
import tv5 from "../../../images/tv3.jpg";
import tv6 from "../../../images/tv4.jpg";
import lg from "../../../images/lgtv.jpg";
import { Link } from 'react-router-dom';


const Tv = () => {
    return (
        <div>
            
            <div><h1>TV Audio & Electronics</h1></div>
            <div>
            <div style={{textAlign:"center"}}><h1>Electronics Party in the USA</h1></div>
            
            <div className="tvimg">
                
                <div className='tvimg2'>
                    <h1>Save Up to 40% on TVs</h1>
                    
                    <div className='abut1'><a ><Link style={{textDecoration:"none", color:"white"}} to='/television'>Shop Now</Link></a></div>
                    <br></br>
                    <a className='a' href=''>See Details</a>
                </div>
                <div className='tvimg1'><img src={tv}></img></div>
            </div>
            <div className='tvss'>
                <div><div className='tv1'><img src={tv1}></img></div>
                <h3 style={{textAlign:"center"}}>Save 30% with TV & Soundbar Bundles</h3></div>
                <div><div className='tv2'><img src={tv2}></img></div>
                <h3 style={{textAlign:"center"}}>Big Sounds, Big Savings Up to 30% Off</h3></div>
            </div>
            </div>
            <Category/>
            <div className='tv3'>
                <img src={lg}></img>
            </div>
            <div className="tvsimg">
            <h1>Shop TVs by Size </h1>
                
                <div className='tvsimg2'>
                <div><img src={tv3}></img>
                <h4>Shop 85" & Larger TVs</h4>
                <p>Save Up To $2,600</p></div>
                <div><img src={tv4}></img><h4>Shop 75" TVs</h4>
                <p>Save Up To $2,000</p></div>
                <div><img src={tv5}></img><h4>Shop 65" TVs</h4>
                <p>Save Up To $1,300</p></div>
                <div><img src={tv6}></img><h4>Shop up to 55" TVs</h4>
                <p>Save Up To $500</p></div>
                </div>
                <div className='tvbut1'>Shop All TVs</div>
            </div>
            <Brand/>
            <div className='tvlist'>
                <div>
            <h3>Shop Home Electronics</h3>
            <p>We use electronics in our everyday life. Electronics help you work, play games, or communicate; they play an important role in our lives, from flat-screen TVs, portable devices, computers, laptops, computer accessories, smartwatches, or exercise equipment. If you are looking for a new electronic to add to your home, shop Conns HomePlus today.</p>
            </div>

            <div>
                <h3>Home Electronics at Conns HomePlus</h3>
                <p>As technology continues to change, must-have electronics are being created and are becoming more eye appealing. Shop Conns HomePlus selection of home electronics that can help meet your needs.</p>
            </div>

            <div>
                <h3>TVs</h3>
                <p>TVs are the most used electronics in a person’s home. At Conns HomePlus, we have the latest and best-priced TVs available. Whether looking for an HDTV, a curved TV, Apple TV, Smart TV, or a 4K Ultra HD TV, you will find a great deal at Conns HomePlus.</p>
                <p>Once you have found a TV within your price range, you must decide on the display type. LED TVs are great for rooms with a lot of light because of the backlighting. OLED TVs provide great picture quality because of the minimal blurring and high contract wide viewing angles.</p>
            </div>
            </div>

            <br></br>
        </div>
    );
}

export default Tv;
