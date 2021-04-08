import React, { useContext, useState } from 'react';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          const users = {
            email:result.user.email,
            name:result.user.displayName
          };
          setLoggedInUser(users);
          history.replace(from)
        }).catch((error) => {
        });
    }
    
    return (
        <div>
            <button className="btn btn-primary mt-3" onClick={handleGoogleSignIn}>sign in</button>
        </div>
    );
};

export default Login;