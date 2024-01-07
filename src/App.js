import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import {useSelector } from 'react-redux';
import Login from './components/Login/Login';


function App(){

    // eslint-disable-next-line
    const {userInfo, token} = useSelector((state)=>state.User);
   
  return (
    <div className="app">
      {!token?( 
        <Login /> 
        ):(
          <div>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
        )
      } 
    </div>
  );
}

export default App;



// "@babel/highlight": "^7.22.5"












// import { Counter } from './features/counter/Counter';
// <Counter />