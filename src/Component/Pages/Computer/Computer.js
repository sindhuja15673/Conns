import React from 'react';
import "../Computer/Computer.css";
import Category from "../../Category/Category";
import Brand from '../../Brand/Brand';
import com from "../../../images/com.jpg";
import tv from "../../../images/tvs1.jpg";
import access1 from "../../../images/computer1.webp";
import access2 from "../../../images/access1.webp";
import access3 from "../../../images/access2.webp";
import access4 from "../../../images/access3.webp";
import type1 from "../../../images/ctype1.webp";
import type2 from "../../../images/ctype2.webp";
import type3 from "../../../images/ctype3.webp";
import type4 from "../../../images/ctype4.webp";
import {Link} from 'react-router-dom';


const Appliance = () => {
    return (
        <div>
            
            <div><h1>Computers</h1></div>
            <div>
            <div style={{textAlign:"center"}}><h1>Summer Tech Check</h1></div>
            
            <div className="cimg">
                
                <div className='cimg2'>
                    <h1>Save Up to 40% on Computers</h1>
                    <p>All HP Computers On Sale!</p>
                    <div className='cbut1'><a><Link style={{textDecoration:"none", color:"white"}} to='/laptop'>Shop Now</Link></a></div>
                </div>
                <div className='cimg1'><Link to='/laptop'><img src={com}></img></Link></div>
            </div>
            
            </div>
            <Category/>
            <div className="csimg">
            <h1>Shop Essential Accessories </h1>
                
                <div className='csimg2'>
                <div><img src={access1}></img>
                <h4>Shop Monitors</h4>
                <p>Choose From A Wide Variety Of Sizes And Styles</p></div>
                <div><img src={access2}></img><h4>Shop Computer Accessories</h4>
                <p>Find What You Need To Finish Your Setup</p></div>
                <div><img src={access3}></img><h4>Shop WiFi & Networking</h4>
                <p>The Best Solution For Streaming And Connecting</p></div>
                <div><img src={access4}></img><h4>Shop Computer Components</h4>
                <p>New Inventory All The Time!</p></div>
                </div>
            </div>

            <div className="csimg">
            <h1>Computers by Type </h1>
                
                <div className='csimg2'>
                <div><img src={type1}></img>
                <h4>Shop PC Gaming</h4>
                <p>Starting At $997</p></div>
                <div><img src={type2}></img><h4>Shop 2-in-1 Laptops</h4>
                <p>Starting At $897</p></div>
                <div><img src={type3}></img><h4>Shop Laptops</h4>
                <p> Starting At $399</p></div>
                <div><img src={type4}></img><h4>Shop Desktops</h4>
                <p> Starting At $579</p></div>
                </div>
            </div>
            <Brand/>
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

export default Appliance;
