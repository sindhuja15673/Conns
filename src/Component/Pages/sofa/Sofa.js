// import React,{useContext} from 'react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../saga/action/cartActions';
import "../Telivision/Television.css";
import tele1 from "../../../images/tele1.jpg";
import tele2 from "../../../images/tele2.jpg";
import tele3 from "../../../images/tele3.jpg";
import tele4 from "../../../images/tele4.jpg";
import tel1 from "../../../images/tel1.jpg";
import tel2 from "../../../images/tel2.jpg";
import tel3 from "../../../images/tel3.jpg";
import tel4 from "../../../images/tel4.jpg";
import tel5 from "../../../images/tel5.jpg";
import { CartContext } from '../../../Contexts/CartContext';


const Sofa = () => {
    const dispatch = useDispatch();
    // const { addToCart } = useContext(CartContext);
    
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };

    const products = [
        { img: tel1, name: 'Parker Reclining Sofa & Loveseat', price: '$1,999' },
        { img: tel2, name: 'Payne Sectional', price: '$5,999' },
        { img: tel3, name: 'Abbott Sofa & Loveseat', price: '$4,999' },
        { img: tel4, name: 'Bradford Sofa & Loveseat', price: '$2,799' },
        { img: tel5, name: 'Commander Sofa & Loveseat ', price: '$2,799' },
        { img: tele4, name: 'Nixon Sofa & Loveseat', price: '$3,299' }
        
    ];
    return (
        <div className='television'>
            <div className='tel1'>
                <div>
                    <h1>Television</h1>
                    <p>Items 1 - 24 of 118 products</p>
                </div>
                <div className='storedet'>
                        <div className='storedetail'>
                            <h3>Shop by Category</h3>
                            <li>Smart 4K TVs(78)</li>
                            <li>Samsung Neo QLED TVs(13)</li>
                            <li>Samsung QLED TVs(18)</li>
                            <li>OLED TVs(17)</li>
                            <li>Samsung Crystal UHD TVs(10)</li>
                            <li>LG QNED TVs(9)</li>
                            <a><li>Show 1 more</li></a>
                        </div>
                        <div className='storedetail'>
                            <h1>Get It Fast</h1>
                            <li>Delivery Tomorrow</li>
                            <li>Pickup Today</li>
                        </div>
                        <div className='storedetail'>
                            <h6>store</h6>
                            <div>
                                <h3>Conn's HomePlus Houston</h3>
                                <h6>0.43 miles</h6>
                            </div>
                            <a>Conn's HomePlus Houston</a>
                            <a>4446 NORTH FREEWAY</a>
                            <a>HOUSTON, Texas 77022</a>
                            <strong> (713)864-5490</strong>
                            <h4>Closes at 9:30 pm today</h4>
                        </div>

                        </div>
            </div>
            <div className='tel'>
            <div className='tele'>
                <h1>Up to 40% Off Big Screen TVs</h1>
                <h4>+Free Delivery and Installation on select LG & Samsung TVs.</h4>
                <p>Offer valid 7/1/24 to 7/7/24.<a href=''>*See Details.</a></p>
            </div>
            <div className='telimg'>
                <div><img src={tele1}></img>
                <h5>"80+"</h5></div>
                <div><img src={tele2}></img>
                <h5>70" to 79"</h5></div>
                <div><img src={tele3}></img>
                <h5>60" to 69"</h5></div>
                <div><img src={tele4}></img>
                <h5>50" to 59"</h5></div>
            </div>
                <div className='telecart'>
                    {products.map((product, index) => (
                        <div key={index} className='teleimg'>
                            <img src={product.img} alt={product.name}></img>
                            <div className='telecontent'>
                                <div>🔥 17 people bought in the past 30 days</div>
                                <p>4 More Options Available</p>
                                <a>{product.name}</a>
                                <h1>{product.price}</h1>
                                <p>Delivery</p>
                            </div>
                            <div><button onClick={() => handleAddToCart(product)}>Add To Cart</button></div>
                        </div>
                    ))}
                </div>
            <br></br>
            </div>
        </div>
    );
}

export default Sofa;
