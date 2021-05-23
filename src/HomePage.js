import React from 'react'
import './HomePage.css'
import {useState, useEffect} from 'react';
import TweetBox from './TweetBox'
import Post from './Post'

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [user,setUser] = useState([]);
    
    useEffect(()=>{
        fetch('/tweet').then(res => res.json())
        .then(result => setPosts(result))
        .catch(error => alert(error.message))
        // the bracketts under this line in useEffects 
        //make it reacts to 
        //a single change inside the posts array
        //and rerenders it in home page
    },[posts])
    useEffect(()=>{
        fetch('/user').then(res => res.json())
        .then(result => setUser(result))
        .catch(error => console.log(error))
    },[])

    return (
        <div className="Home__page">
            <div className="Home__page__header">
                <h2 className="Home__tag">Home</h2>
            </div>
            <TweetBox/>
                {
                    posts.length !== 0 && 
                    posts.map((data,key) =>
                           <Post key={key}
                        // assining the data from dataBase to the post props
                        displayName={user.displayName}
                        userName={user.userName}
                        text={data.text}
                        avatar={data.avatar}
                        verified={data.verified}
                        image={data.image}
                        />
                    )
                }  
        </div>
    )
}

export default HomePage
