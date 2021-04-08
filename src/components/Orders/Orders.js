import React, {useContext, useEffect, useState} from 'react';
import { userContext } from '../../App';
import OrderData from '../OrderData/OrderData';

const Orders = () => {

    const [data, setData] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    useEffect(()=>{
        fetch(`https://thawing-depths-18168.herokuapp.com/orderData/?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            {
                data.map(order =><OrderData order={order}></OrderData>)
            }
        </div>
    );
};

export default Orders;