import React from 'react';
import "../Head3/Head2.css";
import {Link} from "react-router-dom";

const Head2 = () => {
    return (
        <div className='head2'>
            <div className='option'>
                <Link to='/finance'>Finance</Link>
                <div className='dropdown-content'>
                   
                        <li className='droplist1'><a>Prequalify Now</a></li>
                        <li className='droplist1'><a>Credit Card</a></li>
                        <li className='droplist1'><a>Installment Loan</a></li>
                        <li className='droplist1'><a>Lease to Own</a></li>
                        <li className='droplist1'><a>Layaway</a></li>
                   
                    
                </div>
            </div>
            <div className='option'>
                Deals
                <div className='dropdown-content'>
                        <li className='droplist2'><a><strong>Latest Deals</strong></a></li>
                        <li className='droplist2'><a>Appliances</a></li>
                        <li className='droplist2'><a>TV Audio Electronics</a></li>
                        <li className='droplist2'><a>Furniture</a></li>
                        <li className='droplist2'><a>Computers & Home Office</a></li>
                        <li className='droplist2'><a>Top Furniture Styles</a></li>
                        <li className='droplist2'><a>LG Laundry Pairs</a></li>
                        <li className='droplist2'><a>Samsung TV Installation Offer</a></li>
                        <li className='droplist2'><a>See All</a></li>
                        <li className='droplist2'><a><strong>Special Promotions</strong></a></li>
                        <span><li className='droplist2'><a><strong>Financing Offers</strong></a></li></span>
                </div>
            </div>
            <div className='option'>
                <Link to="/appliance">Appliance</Link>
                <div className='dropdown-content1'>
                    <span>
                    <li className='droplist3'><a><h2><strong>Shop All Appliances</strong></h2></a></li>
                    <li className='droplist3'><a><strong>Refrigerators</strong></a></li>
                    <li className='droplist3'><a>French Door Refrigerators</a></li>
                    <li className='droplist3'><a>Side-by-Side Refrigerators</a></li>
                    <li className='droplist3'><a>Top-Freezer Refrigerators</a></li>
                    <li className='droplist3'><a>Bottom-Freezer Refrigerators</a></li>
                    <li className='droplist3'><a>Freezers</a></li>
                    <li className='droplist3'><a>Mini Refrigerators</a></li>
                    <li className='droplist3'><a><strong>Washers and Dryers</strong></a></li>
                    <li className='droplist3'><a>Top Load Washers</a></li>
                    <li className='droplist3'><a>Front-load Washers</a></li>
                    <li className='droplist3'><a>Gas Dryers</a></li>
                    <li className='droplist3'><a>Gas Dryers</a></li>
                    <li className='droplist3'><a>Washer and Dryer Combos</a></li>
                    
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>Appliance Packages</strong></a></li>
                    <li className='droplist3'><a><strong>Dishwashers</strong></a></li>
                    <li className='droplist3'><a>Top Control</a></li>
                    <li className='droplist3'><a>Front Control</a></li>
                    <li className='droplist3'><a><strong>Cooktops</strong></a></li>
                    <li className='droplist3'><a>Electric</a></li>
                    <li className='droplist3'><a>Gas</a></li>
                    <li className='droplist3'><a><strong>Ranges</strong></a></li>
                    <li className='droplist3'><a>Electric Ranges</a></li>
                    <li className='droplist3'><a>Gas Ranges</a></li>
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>Wall Ovens</strong></a></li>
                    <li className='droplist3'><a>Single Ovens</a></li>
                    <li className='droplist3'><a>Double Ovens</a></li>
                    <li className='droplist3'><a>Wall Oven & Microwave Combos</a></li>
                    <li className='droplist3'><a><strong>Microwaves</strong></a></li>
                    <li className='droplist3'><a>Countertop Microwaves</a></li>
                    <li className='droplist3'><a>Built-in Microwaves</a></li>
                    <li className='droplist3'><a>Over The Range Microwaves</a></li>
                    <li className='droplist3'><a><strong>Small Appliances and Cookware</strong></a></li>
                    <li className='droplist3'><a><strong>Vacuum Cleaners</strong></a></li>
                    <li className='droplist3'><a>Robotic Vacuums</a></li>
                    <li className='droplist3'><a>Upright & Cordless Vacuums</a></li>
                    </span>
                    <span>
                        <li className='droplist3'><a><strong>Vent Hoods</strong></a></li>
                        <li className='droplist3'><a><strong>Parts & Accessories</strong></a></li>
                        <li className='droplist3'><a>Refrigerator Accessories</a></li>
                        <li className='droplist3'><a>Washers & Dryer Accessories</a></li>
                        <li className='droplist3'><a>Range Accessories</a></li>
                        <li className='droplist3'><a>Built-In Accessories</a></li>
                        <li className='droplist3'><a>Laundry Pedestals</a></li>
                        <li className='droplist3'><a><strong>Air Conditioners</strong></a></li>
                        <li className='droplist3'><a>Window Air Conditioners</a></li>
                        <li className='droplist3'><a>Portable Air Conditioners</a></li>
                    </span>
                </div>
            </div>
            <div className='option'>
                <Link to='/furniture'>Furniture</Link>
                <div className='dropdown-content1'>
               


                <span>
                    <li className='droplist3'><a><h2><strong>Shop All Furniture</strong></h2></a></li>
                    <li className='droplist3'><a><strong>Living Room Furniture</strong></a></li>
                    <li className='droplist3'><a>Living Room Sets</a></li>
                    <li className='droplist3'><a>Sofas & Sleepers</a></li>
                    <li className='droplist3'><a>Loveseats</a></li>
                    <li className='droplist3'><a>Sectionals</a></li>
                    <li className='droplist3'><a>Recliners</a></li>
                    <li className='droplist3'><a>Coffee & End Tables</a></li>
                    <li className='droplist3'><a><strong>Accent Chairs</strong></a></li>
                    <li className='droplist3'><a>See All</a></li>
                    <li className='droplist3'><a>Bedroom Furniture</a></li>
                    <li className='droplist3'><a>Bedroom Sets</a></li>
                    <li className='droplist3'><a>Beds </a></li>
                    <li className='droplist3'><a>Dressers and Chests</a></li>
                    <li className='droplist3'><a>Nightstands</a></li>
                    <li className='droplist3'><a>Mirrors</a></li>
                    <li className='droplist3'><a>Benches & Vanities</a></li>
                    <li className='droplist3'><a>Dining Room Furniture</a></li>
                    <li className='droplist3'><a>Kitchen and Dining Sets</a></li>
                    <li className='droplist3'><a>Dining Tables</a></li>
                    <li className='droplist3'><a>Dining Chairs & Seating</a></li>
                    <li className='droplist3'><a>Bar Stools</a></li>
                    <li className='droplist3'><a>Sideboards & Buffets</a></li>           
                    </span>

                    <span>
                    <li className='droplist3'><a><strong>Home Office Furniture</strong></a></li>
                    <li className='droplist3'><a><strong>Desks</strong></a></li>
                    <li className='droplist3'><a>Office Chairs</a></li>
                    <li className='droplist3'><a>Bookcases</a></li>
                    <li className='droplist3'><a><strong>Office Storage Cabinets</strong></a></li>
                    <li className='droplist3'><a>Home Décor</a></li>
                    <li className='droplist3'><a>Rugs</a></li>
                    <li className='droplist3'><a><strong>Lamps</strong></a></li>
                    <li className='droplist3'><a>Wall Art & Mirrors</a></li>
                    <li className='droplist3'><a>Home Accessories</a></li>
                    <li className='droplist3'><a>Throw Pillows</a></li>
                    <li className='droplist3'><a>Blankets & Throws</a></li>
                    <li className='droplist3'><a>Kids Bedroom</a></li>
                    <li className='droplist3'><a>Kids Bedroom Sets</a></li>
                    <li className='droplist3'><a>Kids Twin Bed</a></li>
                    <li className='droplist3'><a>Bunk Beds</a></li>
                    <li className='droplist3'><a>Vanity Sets</a></li>
                    <li className='droplist3'><a>Kids Playroom Furniture</a></li>
                    <li className='droplist3'><a>Kids Desks & Chairs</a></li>
                    <li className='droplist3'><a>Table & Chair Sets</a></li>
                    <li className='droplist3'><a>Kids Accent & Decor</a></li>
                    <li className='droplist3'><a>Storage</a></li>
                    <li className='droplist3'><a>Bookcases</a></li>
                    
                    </span>

                    <span>
                    <li className='droplist3'><a><strong>Nursery Furniture</strong></a></li>
                    <li className='droplist3'><a>Cribs</a></li>
                    <li className='droplist3'><a>Dressers</a></li>
                    <li className='droplist3'><a>Changing Tables</a></li>
                    <li className='droplist3'><a><strong>Chests & Nightstands</strong></a></li>
                    <li className='droplist3'><a>Nursery Furniture Sets</a></li>
                    <li className='droplist3'><a>Rails</a></li>
                    <li className='droplist3'><a>Hutches</a></li>
                    <li className='droplist3'><a><strong>Home Theater Furniture</strong></a></li>
                    <li className='droplist3'><a><strong>Storage & Organization</strong></a></li>
                    <li className='droplist3'><a>Folding Chairs</a></li>
                    <li className='droplist3'><a>Folding Tables</a></li>
                    <li className='droplist3'><a>Stadium Seats</a></li>
                    <li className='droplist3'><a>Folding Benches</a></li>
                    <li className='droplist3'><a>Folding Table Sets</a></li>
                    <li className='droplist3'><a>Bathroom Vanities</a></li>
                    <li className='droplist3'><a>Vanity with Sink</a></li>
                    </span>
                    <span>
                        <li className='droplist3'><a><strong>Whole Room Packages</strong></a></li>
                        <li className='droplist3'><a><strong>Living Room Packages</strong></a></li>
                        <li className='droplist3'><a>Villa Hill Collections</a></li>
                    </span>
                </div>
            </div>
            <div className='option'>
                <Link to='/tv'>TV &Electronics</Link>
                <div className='dropdown-content1' id='content1'>
                <span>
                    <li className='droplist3'><a><h2><strong>Shop All Electronics</strong></h2></a></li>
                    <li className='droplist3'><a><strong>Televisions</strong></a></li>
                    <li className='droplist3'><a>Smart 4K TVs</a></li>
                    <li className='droplist3'><a>Samsung Neo QLED TVs</a></li>
                    <li className='droplist3'><a>Samsung QLED TVs</a></li>
                    <li className='droplist3'><a>OLED TVs</a></li>
                    <li className='droplist3'><a>Samsung Crystal UHD TVs</a></li>
                    <li className='droplist3'><a>LG QNED TVs</a></li>
                    <li className='droplist3'><a><strong>8K TVs</strong></a></li>           
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>TV Bundles</strong></a></li>
                    <li className='droplist3'><a><strong>Home Theater Audio & Video</strong></a></li>
                    <li className='droplist3'><a>Soundbars</a></li>
                    <li className='droplist3'><a>DJ & Party Systems</a></li>
                    
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>Audio</strong></a></li>
                    <li className='droplist3'><a>Bluetooth & Portable Speakers</a></li>
                    <li className='droplist3'><a>Headphones</a></li>
                    <li className='droplist3'><a>Home Theater Accessories</a></li>
                    <li className='droplist3'><a><strong>TV Mounts</strong></a></li>
                    <li className='droplist3'><a>HDMI Cables & Surge Protectors</a></li>
                    </span>
                
                    <span>
                    <li className='droplist3'><a><strong>Gaming</strong></a></li>
                    <li className='droplist3'><a>Gaming Consoles</a></li>
                    <li className='droplist3'><a>Arcade Games</a></li>
                    <li className='droplist3'><a>Digital Imaging</a></li>
                    <li className='droplist3'><a><strong>DSLR Cameras</strong></a></li>
                    </span>
                    
                    <span>
                    <li className='droplist3'><a><strong>Smart Home</strong></a></li>
                    <li className='droplist3'><a>Smart Lighting</a></li>
                    <li className='droplist3'><a>Alarms & Sensors</a></li>
                    <li className='droplist3'><a>Cameras & Displays</a></li>
                    <li className='droplist3'><a><strong>Thermostats</strong></a></li>
                    </span>
                </div>
            </div>
            <div className='option'>
                <Link to='/computer'>Computer</Link>
                <div className='dropdown-content1'>
                <span>
                    <li className='droplist3'><a><strong>Shop All Computers</strong></a></li>
                    <li className='droplist3'><a>Laptops & Tablets</a></li>
                    <li className='droplist3'><a>Laptops</a></li>
                    <li className='droplist3'><a>2-in-1 Laptops</a></li>
                    <li className='droplist3'><a><strong>iPad</strong></a></li>
                    <li className='droplist3'><a><strong>MacBook</strong></a></li>
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>Desktops</strong></a></li>
                    <li className='droplist3'><a>All-in-One Desktops</a></li>
                    <li className='droplist3'><a>Desktop Towers</a></li>
                    <li className='droplist3'><a>iMac</a></li>
                    <li className='droplist3'><a><strong>PC Gaming</strong></a></li>
                    <li className='droplist3'><a><strong>Gaming Desktops</strong></a></li>
                    <li className='droplist3'><a>Gaming Laptops</a></li>
                    <li className='droplist3'><a>Gaming TVs & Monitors</a></li>
                    <li className='droplist3'><a><strong>Video Graphic Cards</strong></a></li>
                    <li className='droplist3'><a><strong>SSD Storage</strong></a></li>
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>Computer Accessories</strong></a></li>
                    <li className='droplist3'><a>Computer Accessories & Software</a></li>
                    <li className='droplist3'><a>Wi-Fi & Networking</a></li>
                    <li className='droplist3'><a>Printers</a></li>
                    <li className='droplist3'><a><strong>All-in-One Printers</strong></a></li>
                    </span>
                </div>
            </div>
            <div className='option'>
               <Link to='/bedding'>Mattresses and Bedding</Link> 
                <div className='dropdown-content1'>
                <span>
                    <li className='droplist3'><a><strong>Shop All Mattresses</strong></a></li>
                    <li className='droplist3'><a>Mattresses by Type</a></li>
                    <li className='droplist3'><a>Hybrid</a></li>
                    <li className='droplist3'><a>Memory Foam</a></li>
                    <li className='droplist3'><a><strong>Innerspring</strong></a></li>
                    <li className='droplist3'><a><strong>Bed in a Box</strong></a></li>
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>Bedding Accessories</strong></a></li>
                    <li className='droplist3'><a>Pillows</a></li>
                    <li className='droplist3'><a>Comforter Sets</a></li>
                    <li className='droplist3'><a>Mattress Protectors</a></li>
                    <li className='droplist3'><a><strong>Foundations and Frames</strong></a></li>
                    <li className='droplist3'><a><strong>Adjustable Bases</strong></a></li>
                    <li className='droplist3'><a><strong>Box Springs and Frames</strong></a></li>
                    </span>
                </div>
            </div>
            <div className='option'>
               <Link to="/outdoor">Outdoor</Link> 
                <div className='dropdown-content1' id='content1'>
                <span>
                    <li className='droplist3'><a><strong>Shop All Outdoor</strong></a></li>
                    <li className='droplist3'><a>Outdoor Living & Patio</a></li>
                    <li className='droplist3'><a>Patio Sets</a></li>
                    <li className='droplist3'><a>Patio Chairs</a></li>
                    <li className='droplist3'><a><strong>Patio Tables</strong></a></li>
                    <li className='droplist3'><a><strong>Outdoor Ottomans</strong></a></li>
                    <li className='droplist3'><a><strong>Patio Dining Sets</strong></a></li>
                    <li className='droplist3'><a><strong>Patio Dining Chairs</strong></a></li>
                    <li className='droplist3'><a><strong>Patio Umbrellas</strong></a></li>
                    <li className='droplist3'><a><strong>See All</strong></a></li>
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>Lawn & Garden</strong></a></li>
                    <li className='droplist3'><a>Lawn Mowers</a></li>
                    <li className='droplist3'><a>Electric Transportation</a></li>
                    <li className='droplist3'><a>Bikes</a></li>
                    <li className='droplist3'><a><strong>Scooters</strong></a></li>
                    </span>
                    <span>
                    <li className='droplist3'><a><strong> Toys</strong></a></li>
                    <li className='droplist3'><a>Outdoor Play</a></li>
                    <li className='droplist3'><a>Playsets</a></li>
                    </span>
                </div>
            </div>
            <div className='option'>
                Outlet center
            </div>
            <div className='option'>
                Clearance
                <div className='dropdown-content1' id='contents'>
                <span>
                    <li className='droplist3'><a><strong>Shop All Clearance</strong></a></li>
                    <li className='droplist3'><a>Clearance Appliances</a></li>
                    <li className='droplist3'><a>Clearance Refrigerators</a></li>
                    <li className='droplist3'><a>Washers</a></li>
                    <li className='droplist3'><a><strong>Dryers</strong></a></li>
                    <li className='droplist3'><a><strong>Ranges</strong></a></li>
                    <li className='droplist3'><a><strong>Dishwashers</strong></a></li>
                    <li className='droplist3'><a><strong>Ovens</strong></a></li>
                    <li className='droplist3'><a><strong>Fitness</strong></a></li>
                    <li className='droplist3'><a><strong>See All</strong></a></li>
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>Clearance Furniture</strong></a></li>
                    <li className='droplist3'><a>Living Room</a></li>
                    <li className='droplist3'><a>Bedroom</a></li>
                    <li className='droplist3'><a>Dining Room</a></li>
                    <li className='droplist3'><a><strong>Home Decor</strong></a></li>
                    <li className='droplist3'><a><strong>Clearance TV & Electronics</strong></a></li>
                    </span>
                    <span>
                    <li className='droplist3'><a><strong>Clearance Computers & Home Office</strong></a></li>
                    <li className='droplist3'><a>Clearance Mattresses</a></li>
                    </span>
                </div>
            </div>
            <div className='option'>
                More
                <div className='dropdown-content1'>
                <span>
                    <li className='droplist3'><a><strong>Luggage</strong></a></li>
                    <li className='droplist3'><a>Checked Luggage</a></li>
                    <li className='droplist3'><a>Carry On Luggage</a></li>
                    <li className='droplist3'><a>Backpacks</a></li>
                    <li className='droplist3'><a><strong>Duffels & Weekender Bags</strong></a></li>
                    <li className='droplist3'><a><strong>Travel Accessories</strong></a></li>
                    <li className='droplist3'><a><strong>Travel Totes</strong></a></li>
                    <li className='droplist3'><a><strong>Garment Bags</strong></a></li>
                    <li className='droplist3'><a><strong>Fitness</strong></a></li>
                    <li className='droplist3'><a><strong>Shop All Fitness</strong></a></li>
                    <li className='droplist3'><a><strong>Elliptical</strong></a></li>
                    <li className='droplist3'><a><strong>Treadmill</strong></a></li>
                    <li className='droplist3'><a><strong>Exercise Bike</strong></a></li>
                    <li className='droplist3'><a><strong>Fitness Accessories</strong></a></li>
                    <li className='droplist3'><a><strong>Workout Mirror</strong></a></li>
                    </span>

                </div>
            </div>
            <div className='option'>
               <Link to="/sale"> Buying Guide</Link>
                <div className='dropdown-content' id='content'>
                <li className='droplist1'><a>Refrigerators</a></li>
                        <li className='droplist1'><a>Washers & Dryers</a></li>
                        <li className='droplist1'><a>Living Room</a></li>
                        <li className='droplist1'><a>Sectionals</a></li>
                        <li className='droplist1'><a>Sofas</a></li>
                        <li className='droplist1'><a>Recliners</a></li>
                </div>
            </div>
        </div>
    );
}

export default Head2;
