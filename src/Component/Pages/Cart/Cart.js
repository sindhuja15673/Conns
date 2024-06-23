import React from 'react';
import "../Cart/Cart.css";

const Cart = () => {
    return (
        <div>
            <div className='cart'>
            <div className='cart1'>Your Cart</div>
            <h2>It looks like your cart is empty</h2>
            <h5>Not sure where your items went?</h5>
            <div className='cartb'>
            <div><button className='cartbutt'>Continue Shopping</button></div>
            <div><button className='sign'>Sign in</button></div>
            </div>
            
            </div>
        </div>
    );
}

export default Cart;
