import React from 'react';

const OrderData = (props) => {
    const {name,author, email, orderTime, price} = props.order;
    return (
        <div>
            <h2>Your Order Information</h2>
            <h4>Product name: {name}</h4>
            <h4>Product author: {author}</h4>
            <h4>Product price: {price}</h4>
            <h4>Email: {email}</h4>
            <h4>Time: {orderTime}</h4>
        </div>
    );
};

export default OrderData;