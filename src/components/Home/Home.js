import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('https://thawing-depths-18168.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setCart(data))
    },[])
    return (
        <div>
            <div class="container">
                
                <div className="card-bg row row-cols-1 row-cols-md-3 bg-4">
                {
                    cart.map(data => <Cart data={data}></Cart>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;