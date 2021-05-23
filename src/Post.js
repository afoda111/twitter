import React from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublicIcon from '@material-ui/icons/Public';

function Post({displayName, userName,verified,text,avatar,image}) {
   

    return (
        <div className="Post">
            <div className="Post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="Post__body">
             <div className="Post__header">
              <div className="Post__header__text">
                  <h3>
                      {displayName} 
                      <span className="Post__headerUserName">{ verified && <VerifiedUserIcon className="Post__verified"/>}@{userName}</span>
                  </h3>
                </div>
                <div className="Post__body__textContent">
                    <p>{text}</p>
                </div>
             </div>
             <img
              src={image}
              alt="pic"/>
             <div className="Post__footer">
                 <ChatBubbleOutlineIcon fontSize="small"/>
                 <RepeatIcon fontSize="small"/>
                 <FavoriteBorderIcon fontSize="small" />
                 <PublicIcon fontSize="small" />
             </div>
            </div>
        </div>
    )
}

export default Post
