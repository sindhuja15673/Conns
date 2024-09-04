import React from 'react';
import "../Bedding/Bedding.css";
import bed1 from "../../../images/bed1.jpg";
import bed2 from "../../../images/bed2.jpg";
import bed3 from "../../../images/bed3.jpg";
import bed4 from "../../../images/bed4.jpg";
import bcategory1 from "../../../images/bcategory4.webp";
import bcategory2 from "../../../images/bcategory1.webp";
import bcategory3 from "../../../images/bcategory2.webp";
import bcategory4 from "../../../images/bcategory3.webp";
import Brand from '../../Brand/Brand';
import matress1 from "../../../images/matress1.webp";
import matress2 from "../../../images/matress2.webp";
import matress3 from "../../../images/matress3.webp";
import matress4 from "../../../images/matress4.webp";
import { Link} from 'react-router-dom';


const Bedding = () => {
    return (
        <div>
            <div><h1>Mattresses & Bedding</h1></div>
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
            <div>
            <div style={{textAlign:"center"}}><h1>Summer Tech Check</h1></div>
            
            <div className="bimg">
                
                <div className='bimg2'>
                    <h1>Save Up to 40% on Computers</h1>
                    <p>All HP Computers On Sale!</p>
                    <div className='cbut1'><a><Link style={{textDecoration:"none",color:"white"}} to='/matress2'>Shop Now</Link></a></div>
                </div>
                <div className='bimg1'><img src={bed4}></img></div>
            </div>
            
            </div>
            <div className="bmsimg">
            <h1>Shop by Category </h1>
                
                <div className='bmsimg2'>
                <div><img src={bcategory1}></img>
                <h4>Mattresses by Type</h4></div>
                <div><img src={bcategory2}></img><h4>Mattress-in-a-Box</h4>
                </div>
                <div><img src={bcategory3}></img><h4>Bedding Accessories</h4>
                </div>
                <div><img src={bcategory4}></img><h4>Foundations & Frames</h4>
                </div>
                </div>
            </div>
            <div className='sleep'>
            <div className="bmimg">
            <h1>Experience award-winning sleep</h1>
            <p>Meet the Casper mattress that's right for you </p>
                
                <div className='bmimg2'>
                <div><img src={bed1}></img>
                <h4>The Casper Mattress</h4>
                <p>Three layers of responsive comfort and support, plus cooling, all at a cozy price.</p></div>
                <div className='bed2'><img  src={bed2}></img><h4>Original Hybrid Mattress</h4>
                <p>Casper's best-selling mattress, with foam and springs for added lift and airflow.</p></div>
                <div><img src={bed3}></img><h4>Snow Mattress</h4>
                <p> Enhanced comfort and support, now optimized with our coolest sleep technology.</p></div>
                </div>
            </div>
            </div>
             <Brand/>
            <div className="bsimg">
            <h1>Shop Mattresses by Type </h1>
                
                <div className='bsimg2'>
                <div><img src={matress1}></img>
                <h4>Hybrid Mattresses</h4>
                <p>Starting At $549</p></div>
                <div><img src={matress2}></img><h4>Memory Foam Mattresses</h4>
                <p> Queen Starting At $799</p></div>
                <div><img src={matress3}></img><h4>Innerspring Mattresses</h4>
                <p>Starting At $319</p></div>
                <div><img src={matress4}></img><h4>Mattress-In-A-Box</h4>
                <p>Starting At $799</p></div>
                </div>
            </div>
           
            <div className='clist'>
                <div>
            <h3>Shop Computers</h3>
            <p>Computers vary in portability, performance, and power. When buying a new computer, you must know what requirements you want to ensure you are making the right purchase. Some things to consider are if you will need to upgrade later, along with portability and convenience. Conn’s HomePlus has various computer options to choose from whether you are looking for work, school, gaming, or entertainment.</p>
            </div>

            <div>
                <h3>Choosing a Business Computer or Personal Computer</h3>
                <p>Business computers are best for those needing to use applications such as Microsoft Office. Other Office products that you may need on your business computer are Word, PowerPoint, Excel, and Outlook. Personal computers are typically used just for internet usage, reading the news, or streaming media. If you want to run software such as Adobe Photoshop or play computer games, you will need a good CPU processor. You may not need the best for a business computer, but a good high-speed processor will help your applications run faster.</p>
            </div>

            <div>
                <h3>Conn’s HomePlus Difference</h3>
                <p>Secure and convenient shopping</p>
                <p>Next Day Delivery Options</p>
                <p>Personalized Financing</p>
                <p>Convenient Services</p>
                <p>Buy Online Pick Up In-Store</p>
                <p>Once you have found a TV within your price range, you must decide on the display type. LED TVs are great for rooms with a lot of light because of the backlighting. OLED TVs provide great picture quality because of the minimal blurring and high contract wide viewing angles.</p>
            </div>
            </div>

            <br></br>
        </div>
    );
}

export default Bedding;
