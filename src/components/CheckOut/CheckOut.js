import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const CheckOut = () => {
    const {id} = useParams();
    const [check, setCheck] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:6100/books/${id}`)
        .then(res => res.json())
        .then(data => setCheck(...data))
    },[id]);
    const {name, price, author} = check;

    const [loggedInUser, setLoggedInUser] =useContext(userContext);

    const checkOutOrder = () =>{
        const ordersData = {
            email:loggedInUser.email, clientName:loggedInUser.name,  name, price, author, orderTime: new Date()
        }
        fetch("https://thawing-depths-18168.herokuapp.com/addOrders",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
           body: JSON.stringify(ordersData)
        })
    }

    return (
        <div className="container">
                <h1 className="mb-5 mt-3">Check out</h1>
            <div className="row text-left">
                
                <div className="col-4">
                    <h5>Description</h5>
                    <h2>{name}</h2> 
                </div>
                <div className="col-3">
                    <h5>Quantity</h5>
                    <h2 className="text-center text-md-left">1</h2>
                </div>
                <div className="col-2">
                    <h5>Price</h5>
                <h2>{price}</h2>
                </div>
            </div>
            <button onClick={checkOutOrder} className="btn btn-primary mt-5">CheckOut</button>
            
            
            
        </div>
    );
};

export default CheckOut;