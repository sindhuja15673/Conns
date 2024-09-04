import React from 'react';
import "../Sellers/Sellers.css";
import dryer from "../../images/dryer.jpg";
import lg from "../../images/SRF.jpg";
import sams from "../../images/RF2.jpg";
import lg2 from "../../images/refridge.jpg";
import ge from "../../images/GTD.jpg";
import lgs from "../../images/MHE.jpg";
const Sellers = () => {
    return (
        <div className='sel'>
            <h1>Top Sellers</h1>
            <div className='sell'>
                <span>Appliances</span>
                <span>Furniture</span>
                <span>TV Audio & Electronics</span>
                <span>Computers</span>
                <span>Mattresses & Bedding</span>
            </div>
            <hr></hr>
            <div className='app1'>
                <div className='box'>
                    <div><img src={dryer}></img>
                        <div><a className='det'>Sale</a></div>
                    </div>
                    <div className='imgcontentts'>
                        <h5>klhyrertyiiygyt</h5>
                        <h2>$99.99</h2>
                        <h5>oitytutyhihuijii</h5>
                    </div>
                </div>
                <div className='box'>
                    <div><img src={lg}></img>
                    <div><a className='det'>Sale</a></div>
                    </div>
                    <div className='imgcontent'>
                        <h5>klhyrertyiiygyt</h5>
                        <h2>$99.99</h2>
                        <h5>oitytutyhihuijii</h5>
                    </div>
                </div>
                <div className='box'>
                    <div><img src={sams}></img>
                    <div><a className='det'>Sale</a></div>
                    </div>
                    <div className='imgcontent'>
                        <h5>klhyrertyiiygyt</h5>
                        <h2>$99.99</h2>
                        <h5>oitytutyhihuijii</h5>
                    </div>
                </div>
                <div className='box'>
                    <div><img src={lg2}></img>
                    <div><a className='det'>Sale</a></div></div>
                    <div className='imgcontent'>
                        <h5>klhyrertyiiygyt</h5>
                        <h2>$99.99</h2>
                        <h5>oitytutyhihuijii</h5>
                    </div>
                </div>
                <div className='box'>
                    <div><img src={ge}></img>
                    <div><a className='det'>Sale</a></div></div>
                    <div className='imgcontent'>
                        <h5>klhyrertyiiygyt</h5>
                        <h2>$99.99</h2>
                        <h5>oitytutyhihuijii</h5>
                    </div>
                </div>
                {/* <div><img src={lgs}></img>
                <div><a className='det'>Sale</a></div></div> */}
            </div>
            
        </div>
    );
}

export default Sellers;
