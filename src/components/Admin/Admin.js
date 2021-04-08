import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

const Admin = () => {
   
    return (
        <>
          <div className="container">
            <div className="container">
                <div className="row">
                    <div className="admin col-3">
                        <div>
                            <Link to="/manageProduct"><p>Manage Product</p></Link>
                            <Link to="addProduct"><p>Add Product</p></Link>
                        </div>
                    
                    </div>
                    <div className="col-9"></div>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default Admin;