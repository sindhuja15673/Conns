import React,{useContext} from 'react';
import "../../Telivision/Television.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../saga/action/cartActions';
import patio6 from "../../../../images/patio6.jpg";
import patio1 from "../../../../images/patio1.webp";
import patio2 from "../../../../images/patio2.webp";
import patio3 from "../../../../images/patio3.webp";
import patio4 from "../../../../images/patio4.webp";
import patio5 from "../../../../images/patio5.jpg";
import { CartContext } from '../../../../Contexts/CartContext';


const Patio = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const products = [
        { img: patio1, name: 'La Palma 5-pc Patio Set', price: '$1,999' },
        { img: patio2, name: 'La Palma Sectional Set', price: '$5,999' },
        { img: patio3, name: 'La Palma Table', price: '$4,999' },
        { img: patio4, name: 'La Palma Chair', price: '$2,799' },
        { img: patio5, name: 'Marquesa Table ', price: '$2,799' },
        { img: patio6, name: 'Tan 9 FT Round Umbrella with Crank and Tilt Function and Standing Umbrella Base', price: '$3,299' }
        
    ];
    return (
        <div className='television'>
            <div className='tel1'>
                <div>
                    <h1>Mattresses</h1>
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
                <h1>Find the perfect mattress for you!</h1>
                <h4>Take our mattress quiz today</h4>
                <p>Offer valid 7/1/24 to 7/7/24.<a href=''>*See Details.</a></p>
            </div>
            <br></br>
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

export default Patio;
