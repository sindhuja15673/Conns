import React from 'react';
import "../Cart/Cart.css";
// import { CartContext } from '../../../Contexts/CartContext';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../saga/action/cartActions';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
// const Cart = () => {
//     const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className='cart'>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                
                <div className='carts'>
             <div className='cart'>
            <div className='cart1'></div>
             <h2>It looks like your cart is empty</h2>
             <h5>Not sure where your items went?</h5>
             <div className='cartb'>
             <div><Link to='/'><button className='cartbutt' id='cart'>Continue Shopping</button></Link></div>
             <div><Link to='/signin'><button className='sign'>Sign in</button></Link></div>
             </div>
             </div>
         </div>
            ) : (
                <div className='cart-items'>
                    {cart.map((item, index) => (
                        <div>
                        <div key={index} className='cart-item'>
                            <img src={item.img} alt={item.name} />
                            <div className='price'>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                            <div className='remove'><button onClick={() => dispatch(removeFromCart(item))}>Remove</button></div>
                            
                        </div> 
                        <br></br>
                        </div>
                    ))}   
                </div>
            )}
        </div>
    );
}

export default Cart;
