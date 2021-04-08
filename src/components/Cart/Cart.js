import React from 'react';
import { useHistory } from 'react-router';
import './Cart.css'

const Cart = (props) => {
    
    const {name, image, price, _id} = props.data;

    const history = useHistory();
    const showCheckOut = id =>{
        const url = `checkout/${id}`;
        history.push(url)
    }
    return (
        <div>
            <div className="container">
            <div className="col">
                <div className="container books">
                        <div className="card books-board" >
                            <div className="books-img">
                                <img className="img-fluid w-50 mx-auto mt-2" src={image} alt=""/>
                            </div>
                            <div className="card-body">
                                <h5>{name}</h5>
                                <p>{price}</p>
                                <button onClick={()=> showCheckOut(_id)} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                </div>
                
            </div>
            
        </div>
        </div>
       
    );
};

export default Cart;