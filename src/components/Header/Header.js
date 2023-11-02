import React from 'react';
import imgLinkedin from './linkedin_logo.jpeg';
import './header.css';
import HeaderOptions from './HeaderOptions';
//import icons from mui
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout} from '../../features/userSlice';
import { auth } from '../Feed/firebase';
import { signOut } from 'firebase/auth';

function Header() {
  const dispatch = useDispatch()
  const userLogout = ()=>{
    dispatch(logout());
    signOut(auth).then(() => {
      alert("user logout successfully")
    }).catch((error) => {
      alert("something went to be wrong")
    });
  }

  return (
    <div className='header'>
        <div className="header__left">
            <img src={imgLinkedin} alt="" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header__right">
          <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={PeopleAltIcon} title="My Network" />
          <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOptions Icon={SmsIcon} title="Messaging" />
          <HeaderOptions Icon={NotificationsIcon} title="Notification" />
          <HeaderOptions onClick={userLogout} avtar={true} title="Me" />
        </div>



    </div>
  )
}

export default Header
