import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => { 
 
    return (
        <div  className="container">
          <div className="container">
                <div className="row">
                    <div className="admin col-3">
                        <div>
                            <Link to="/manageProduct"><p>Manage Product</p></Link>
                            <Link to="addProduct"><p>Add Product</p></Link>
                        </div>
                        </div>
                        <div className="col-9">
                            <h3>Add product</h3>
                            <form action="https://thawing-depths-18168.herokuapp.com/addProduct" method="POST">
                                <input className="mb-2" type="text" placeholder="product name" name="name" required/><br/>
                                <input className="mb-2" type="text" placeholder="author" name="author" required/><br/>
                                <input className="mb-2" type="text" placeholder="add price" name="price" required/><br/>
                                <input className="mb-2" type="text" placeholder="set url" name="image"/><br/>
                                <button className="btn btn-primary mt-2" type="submit">Submit product</button>
                            </form>
                        </div>
                    </div>
            </div>
             
        </div>
    );
};

export default AddProduct;