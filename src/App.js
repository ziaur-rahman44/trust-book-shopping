import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import Headers from './components/Headers/Headers';
import AddProduct from './components/AddProduct/AddProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';
import ManageProduct from './components/ManageProduct/ManageProduct';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <>
    <div className="App">
     
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    
    <Router>
      <Headers/>
        <Switch>
        
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
          <Route path="/addProduct">
            <AddProduct/>
          </Route>
          <PrivateRoute path="/manageProduct">
            <ManageProduct/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      </userContext.Provider>
    </div>
    </>
  );
}

export default App;
