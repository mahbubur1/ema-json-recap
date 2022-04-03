import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2 className='cart-title'>Order Summary</h2>
                    <div className='cart-body'>
                    <p>Selected Items: {cart.length}</p>
                    </div>
        </div>
    );
};

export default Cart;