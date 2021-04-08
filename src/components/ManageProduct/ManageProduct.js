import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageData from '../ManageData/ManageData';

const ManageProduct = () => {
    const [book, setBook] = useState([]);
    useEffect(()=>{
        fetch("https://thawing-depths-18168.herokuapp.com/books")
        .then(res => res.json())
        .then(data => setBook(data))
    },[])
    
    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="admin col-3">
                        <div>
                            <Link to="/manageProduct"><p>Manage Product</p></Link>
                            <Link to="addProduct"><p>Add Product</p></Link>
                        </div>
                        </div>
                        <div className="col-9">
                            <h3 className="mb-2">Manage Product</h3>
                                {
                                    book.map(data => <ManageData data={data}></ManageData>)
                                }
                    
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ManageProduct;