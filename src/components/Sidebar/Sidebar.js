import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import myBgPhoto from './myBg_photo.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser)


    const recentItem = (topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={myBgPhoto} alt="" />
            <Avatar src={user.photoURL} className='sidebar_avtar' ></Avatar>
            <h2 className='myName'>{user.displayName}</h2>
            <p>{user.email}</p>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who's viewed your profile</p>
                <p className='sidebar__statNumber'>232</p>
            </div>
            <div className="sidebar__stat">
                <p>Impressions of your post</p>
                <p className='sidebar__statNumber'>866</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('JavaScript')}
            {recentItem('MongoDb')}
            {recentItem('Express js')}
            {recentItem('React js')}
            {recentItem('react native')}
        </div>
      
    </div>
  )
}

export default Sidebar
