import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 
// import { faGoogle } from '@fortawesome/free-solid-svg-icons'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); 
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
   console.log(from);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                setUser(signedOutUser)
                setLoggedInUser(signedOutUser)
            })
            .catch(err => {
         
            })
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo)
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo)
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', res.user);

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo)

                });
        }
        e.preventDefault();
    }

    return (
        <div>     
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-md-5 card shadow mt-5 bordered ">
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-center mb-4">{newUser ? 'Create an account' : 'Login'}</h3>
                            {newUser &&
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" onBlur={handleBlur} class="form-control" placeholder="Name" required />
                                </div>
                            }
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" name="email" onBlur={handleBlur} class="form-control" placeholder="Email" required />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" onBlur={handleBlur} class="form-control" placeholder="Password" required />
                            </div>
                            <input className="btn btn-primary mt-2" type="submit" value={newUser ? 'Create an account' : 'Login'} />
                            <h6 className="text-right mt-2" style={{ fontSize: '20px' }}>
                                {newUser ?
                                    "Already have an account?"
                                    : "Don't have an account?"
                                } <a
                                    href="/"
                                    onClick={(event) => {
                                        setNewUser(!newUser);
                                        event.preventDefault();
                                    }}>
                                    {newUser ? 'Create an account' : 'Login'}
                                </a>
                            </h6>
                        </form>
                        <p style={{ color: 'red' }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                        <div className="mb-3">
                            <button onClick={handleGoogleSignIn} className="btn btn-primary m-2">  <FontAwesomeIcon icon={faGoogle} size="2x" /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;