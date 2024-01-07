import React, { useState } from 'react';
import './Login.css';
import linkedin_login from './linkedin_login.jpg'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import {auth} from '../Feed/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

function Login() {

    //take value from "input" fields in "text" state then use this data.
    const [text, setText] = useState({email:"", password:"", name:"", profilePic:""});
    const handleOnChange = (e)=>{
        e.preventDefault();
        setText({...text, [e.target.name]:e.target.value})
    }

    const dispatch = useDispatch(); //dispatch is use to call userSlice functions like "dispatch(login(payload))"

    //Login*****************************
    const loginToApp = async(e)=>{
        e.preventDefault();
        const {email, password, name, profilePic} = text;
        if(!name){
            return alert("Please enter a full name");
        }
        
        try{
            const res = await signInWithEmailAndPassword(auth, email, password)
            dispatch(
                login({
                    email: res.user.email,
                    displayName: name,
                    photoUrl: profilePic,
                    uid: res.user.uid,
                    token:res.user.accessToken
                })
            )
        }
        catch(err){
            console.log(err);
        }


    }

    //register**************************
    const register = async()=>{
        const {email, password, name, profilePic} = text;
        if(!name){
            return alert("Please enter a full name");
        }
        
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)
            dispatch(
                login({
                    email: res.user.email,
                    displayName: name,
                    photoUrl: profilePic,
                    uid: res.user.uid,
                    token:res.user.accessToken
                })
            )
        }
        catch(err){
            console.log(err);
        }
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
