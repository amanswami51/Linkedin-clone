import React, { useState } from 'react';
import './Login.css';
import linkedin_login from './linkedin_login.jpg'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import {auth} from '../Feed/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

function Login() {
    const dispatch = useDispatch();

    //take value from "input" fields in "text" state then use this data.
    const [text, setText] = useState({email:"", password:"", name:"", profilePic:""});
    const handleOnChange = (e)=>{
        e.preventDefault();
        setText({...text, [e.target.name]:e.target.value})
    }

    //use firebase authentication
    const loginToApp = (e)=>{
        e.preventDefault();
        const {email, password, name} = text;
        if(!name){
            return alert("Please enter a full name");
        }
        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth)=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
            }))
        })
        .catch((error)=>{
            alert(error)
        });


    }

    //Save user information in redux store for registeration.
    const register = ()=>{
        const {email, password, name, profilePic} = text;
        if(!name){
            return alert("Please enter a full name");
        }
     
        createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth)=>{
            updateProfile(userAuth.user, {
                displayName: name,
                photoURL: profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
        }).catch((error)=>{
            alert(error)
        });
    }
  return (
    <div className='login'>
        <img src={linkedin_login} className="linkedinLogoClass" alt="" />
        <form>
            <input type="text" name='name' value={text.name} onChange={handleOnChange} placeholder='Full Name (required if registering)' />
            <input type="text" name='profilePic' value={text.profilePic} onChange={handleOnChange} placeholder='Profile pic URL (optional)' />
            <input type="Email" name='email' value={text.email} onChange={handleOnChange} placeholder='Email' />
            <input type="Password" name='password' value={text.password} onChange={handleOnChange} placeholder='Password' />
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>
            Not a member? 
            <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login
