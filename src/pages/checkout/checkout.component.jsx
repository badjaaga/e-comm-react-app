import React from 'react';

import './checkout.styles.scss';

const CheckoutPage = () => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <span>Product</span>
        </div>
        <div className='checkout-header'>
            <span>Description</span>
        </div>
        <div className='checkout-header'>
            <span>Price</span>
        </div>
        <div className='checkout-header'>
            <span>Quantity</span>
        </div>
        <div className='checkout-header'>
            <span>Remove</span>
        </div>
    </div>
)

export default CheckoutPage;