import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/Feed/firebase';

function App() {
  //import userslice from redux
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if(user){
          dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          }))
        } 
        else{
          dispatch(logout());
        }
      });
      // eslint-disable-next-line
    },[])
  return (
    <div className="app">
        <Header />
        {
          !user?<Login /> 
            :<div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
        } 
    </div>
  );
}

export default App;



// "@babel/highlight": "^7.22.5"












// import { Counter } from './features/counter/Counter';
// <Counter />