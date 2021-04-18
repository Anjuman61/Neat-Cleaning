import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const LogIn = () => {
    const [user, setUser] = useContext(UserContext)
    var provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setUser(signedInUser);
                history.replace(from)
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)

            });
    }
    return (
        <div style={{textAlign:'center', marginTop:'100px'}}>
            <button className="btn btn-info " onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> SignIn With Google</button>

        </div>
    );
};

export default LogIn;