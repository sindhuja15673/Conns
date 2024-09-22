
import React, { useContext } from 'react';
import "../../Telivision/Television.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../saga/action/cartActions';
import product1 from "../../../../images/dishwasher.webp";
import product2 from "../../../../images/GTD.jpg";
import product3 from "../../../../images/refridge.jpg";
import product4 from "../../../../images/refrigerator.webp";
import product5 from "../../../../images/dryer.jpg";
import product6 from "../../../../images/ranges.webp";
import product7 from "../../../../images/RF2.jpg";
import { CartContext } from '../../../../Contexts/CartContext';

const Appliances1 = () => {
    // const { addToCart } = useContext(CartContext);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        // alert('Product is added to cart')
        // addToCart(product);
    };

    const products = [
        { img: product1, name: 'Dishwasher', price: '$999' },
        { img: product2, name: 'GTD', price: '$1,299' },
        { img: product3, name: 'Refridge', price: '$899' },
        { img: product4, name: 'Refrigerator', price: '$1,499' },
        { img: product5, name: 'Dryer', price: '$799' },
        { img: product6, name: 'Ranges', price: '$1,099' },
        { img: product7, name: 'RF2', price: '$1,399' },
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
                    <div><img src={product4}></img>
                        <h5>"80+"</h5></div>
                    <div><img src={product4}></img>
                        <h5>70" to 79"</h5></div>
                    <div><img src={product6}></img>
                        <h5>60" to 69"</h5></div>
                    <div><img src={product6}></img>
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

export default Appliances1;
