import React from 'react'
import {useState} from 'react'
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EventIcon from '@material-ui/icons/Event';
import {Avatar, Button} from '@material-ui/core'
import './TweetBox.css'
import axios from 'axios'

function TweetBox() {
    const [tweetText, setTweetText] = useState('')
    const [user, setUser] = useState([])
    
    const sendTweet = async (e) =>{
        //will take data from the dataBase and combine it with data from the tweet box 
        //then sends them to the posts dataBase and render them on the UI 
        e.preventDefault()
        await fetch('/user').then(res => res.json())
        .then(data => setUser(data))
            // giving data to dataBase
        setTweetText("")
        axios.post('/tweet', {
            displayName : `${user.displayName}`,
            userName : `${user.userName}`,
            verified : true,
            avatar : "https://w3schoolsrus.github.io/w3images/avatar2.png",
            text : tweetText,
            image: "https://i.pinimg.com/originals/00/cc/b5/00ccb59a1a02118b6cad14ceb578bb54.gif"
        }).catch(error=>alert(error.message))
    }
    

    return (
          <div className="TweetBox">
                 <form>
                     <div className="TweetBox__Input">
                        <Avatar src="https://w3schoolsrus.github.io/w3images/avatar2.png" className="User__avatar"/> 
                        <input value = {tweetText} onChange={e => setTweetText(e.target.value)} className="Tweeting" type="text" placeholder="What is happening?"></input>
                     </div>
                 </form>
                 <div className="TweetBox__button__div" >
                    <ImageIcon className="Image__input__icon"/>
                     <GifIcon className="Gif__input__icon" />
                     <PollIcon className="Poll__icon" />
                     <EmojiEmotionsIcon className="Emoji__icon" />
                     <EventIcon className="Event__icon" />
                     <Button type="submit" onClick={sendTweet} className="TweetBox__button">Tweet</Button>
                 </div>
                     
             </div>    
    )
}

export default TweetBox
