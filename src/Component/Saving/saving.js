import React from 'react';
import "../Saving/Saving.css";
import { IoIosArrowForward } from "react-icons/io";
import save1 from "../../images/save1.jpg";
import save2 from "../../images/save2.jpg";
import save3 from "../../images/save3.jpg";
import save4 from "../../images/save4.jpg";
import save5 from "../../images/save5.jpg";
import save6 from "../../images/save6.jpg";

const Offers = () => {
    return (
        <div>
            <br></br>
            <div className='of'>
                <h1>Bigger Pictures, Bigger Saving</h1>
                

                <div className='offimg'>
                    <div><img src={save1}></img>
                    <h3>Shop 85" or Larger TVs</h3>
                    <h5>Save Up To $2,600</h5></div>
                    <div><img src={save2}></img>
                    
                    <h3>Shop 75" TVs</h3>
                    <h5>Save Up To $1,700</h5></div>
                    <div><img src={save3}></img>
                    
                    <h3>Shop 65" TVs</h3>
                    <h5>Save Up To $1,300</h5></div>
                    <div><img src={save4}></img>
                    
                    <h3>Shop up to 55" TVs</h3>
                    <h5>Save Up To $600</h5></div>
                    
                </div>
                <div className='offroom'>
                        <div><img src={save5}></img>
                    <br></br>

                    <h3>Save 30% with TV &Soundbar Bundles</h3>
                    </div>
                        <div>
                        <img src={save6}></img>

                        <br></br>

                    <h3>Big Sounds, Big Savings Up to 40% Off </h3>
                    <h5>Keep Calm And Turn It Up</h5>
                        </div>
                    
                </div>
                <button className='butt' id='butt'>Shop Electronics <IoIosArrowForward /></button>
            </div>
        </div>
    );
}

export default Offers;
