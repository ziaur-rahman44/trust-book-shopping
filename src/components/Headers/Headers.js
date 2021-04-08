import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';
import { userContext } from '../../App';

const Headers = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <div>
            <div className="container">
            <div className="container">
            <div className="row header-area ">
                       <div className="col-12 col-md-6">
                            <h2 className="pt-2 text-white">Trust Book Shopping</h2>
                       </div>
                       <div className="col-12 col-md-6">
                       <nav>
                        <Link to="/home"><p>Home</p></Link>
                        <Link to="/orders"><p>Orders</p></Link>
                        <Link to="/admin"><p>Admin</p></Link>
                        {
                            loggedInUser.email ? <p>{loggedInUser.name}</p>: <Link to="/login"><p>Login</p></Link>
                        }
                       
                        </nav>
                       </div>
                   </div>
            </div>
        </div>
        </div>
    );
};

export default Headers;