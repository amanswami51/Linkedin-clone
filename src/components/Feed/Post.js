import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoURL}) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar src={photoURL}/>
        <div className="post__info">
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/>
        <InputOption Icon={CommentIcon} title="Comment" color="gray"/>
        <InputOption Icon={RepeatIcon} title="Repost" color="gray"/>
        <InputOption Icon={SendIcon} title="Send" color="gray"/>
      </div>
    </div>
  )
}

export default Post
