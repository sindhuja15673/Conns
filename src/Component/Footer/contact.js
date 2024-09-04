import React from 'react';
import "../Footer/Contact.css";
import feedback from "../../images/feedback.png";
import { TbMailPlus } from "react-icons/tb";
import { RiWechatLine } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { RiTruckLine } from "react-icons/ri";
import search from "../../images/search.webp";
import logo from "../../images/logo.webp";
import fb from "../../images/fb.webp";
import yt from "../../images/yt.webp";
import insta from "../../images/insta.webp";
import twitter from "../../images/insta.webp";
import fb1 from "../../images/fb1.webp";
import pinterest from "../../images/pinterest.webp";
import insta1 from "../../images/insta1.webp";
import twitter1 from "../../images/twitter1.webp";
import yt1 from "../../images/yt1.webp";
import pinterest1 from "../../images/pinterest1.webp";

const Contact = () => {
    
    const handleClick = ()=>{
        alert('your Email Id is successfully sent');
    }
    return (
        <div>
            <div className = 'contact'>
                <div className = 'contactdet'>
                    <div className = 'email'>
                        <h4><TbMailPlus />Sign up and be the first in on the best deals</h4>
                        <h5>By entering your email address and clicking the <strong>"Submit"</strong> button, you are consenting to recieve marketing email from Conn Appliances, Inc.</h5>

                        <br></br>
                        <input placeholder='Enter your email address'></input><button onClick={handleClick}>Submit</button>
                    </div>
                    <div className='phone'>
                        <h4><LuMessageSquare />Opt in for Conn's Text Club</h4>
                        <input placeholder='Enter your mobile number'></input><button>Submit</button>
                        <br></br>
                        <h5 className='h5'>By entering your cell phone number above and clicking submit, you expressly consent to join Conns Text Club and to receive marketing and promotional offers from Conns via automated text/SMS message to the mobile number you text us from for products, services and financing offered by Conns HomePlus. Your consent is not a condition of purchase or financing. Message and data rates may apply. Messages are recurring.</h5>
                    </div>
                </div>
                <div className='cont'>
                    <div className='contactinfo'>
                        <div className='opt'><a><img src={search}></img>Financing option</a></div>
                        <h4>About Conn's HomePlus</h4>
                        <ul>
                            <li>About Us</li><br></br>
                            <li>Careers</li><br></br>
                            <li>Investor Relations</li><br></br>
                            <li>Blog</li><br></br>
                        </ul>
                    </div>
                    <div className='contactinfo'>
                        <div className='opt'><a><RiWechatLine />Chat with an Associate</a></div>
                        <h4>Here to Help You</h4>
                        <ul>
                            <li>Fin a Store</li><br></br>
                            <li>Contact Us</li><br></br>
                            <li>Pay My Bill</li><br></br>
                            <li>Return & Exchanges</li><br></br>
                            <li>Delivery, Shipping & Pickup</li><br></br>
                            <li>Replacement Product Plan Agreement</li><br></br>
                            <li>Service Request</li><br></br>
                            <li>Service Request Status</li><br></br>
                            <li>Credit Insurance & Payment Protection</li><br></br>
                            <li>Check Gift Card Balance</li><br></br>
                            <li>Check Furniture Cashback Status</li><br></br>
                            <li>Check Mattress Cashback Status</li><br></br>
                            <li>Protection Plans</li>
                            
                        </ul>
                    </div>
                    <div className='contactinfo'>
                        <div className='opt'><a><RiTruckLine />Track My Order or Delivery</a></div>
                        <h4>Shop With Us</h4>
                        <ul>
                            <li>Latest Deals</li><br></br>
                            <li>Clearance</li><br></br>
                            <li>Special Promotions</li><br></br>
                            <li>Finance Offers</li><br></br>
                            <li>Low Price Guarantee</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='container'>
                <div className='image-container1'>
                    <img className='image1' src={logo} alt="Logo"></img>
                </div>
                <div className='image-container'>
                    <img className='image first' src={fb} alt="Facebook"></img>
                    <img className='image second' src={fb1} alt="Facebook Hover"></img>
                </div>
                <div className='image-container'>
                    <img className='image first' src={insta} alt="Instagram"></img>
                    <img className='image second' src={insta1}></img>
                </div>
                <div className='image-container'>
                    <img className='image first' src={twitter} alt="Twitter"></img>
                    <img className='image second' src={twitter1}></img>
                </div>
                <div className='image-container'>
                    <img className='image first' src={yt} alt="YouTube"></img>
                    <img className='image second' src={yt1}></img>
                </div>
                <div className='image-container'>
                    <img className='image first' src={pinterest} alt="Pinterest"></img>
                    <img className='image second' src={pinterest1}></img>
                </div>
                </div>
                <hr className='hr'></hr>
                <div className='footer'>
                    <div className='ft'>

                    <p>Copyright © 2024 Conn's HomePlus. All rights reserved.</p>
                    </div>
                    <div className='foot1'>
                        <ul>
                            <li className='foot'><a>Privacy Policy</a></li>
                            <li className='foot'><a>Site Map</a></li>
                            <li className='foot'><a>Accessibility Statement</a></li>
                            <li className='foot'><a>Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className='feedback'>
                <img className='feed' src={feedback}></img>

            </div>
            
        </div>
    );
}

export default Contact;



