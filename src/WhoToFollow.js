import React from 'react'
import './WhoToFollow.css'
import {Avatar, Button} from '@material-ui/core'
function WhoToFollow({ avatar, name}) {
    return (
        <div className="follow">
            <div className="follow__body">
                <Avatar src={avatar}/>
                <h3 className="follow__username">{name}</h3>
                <Button  className="follow__button">follow</Button>
            </div>
        </div>
    )
}

export default WhoToFollow
