import React from 'react';
import './LeftSideBar.css';
import WhoToFollow from './WhoToFollow'


function LeftSideBar(){
   
    return (
        <div className="LeftSideBar">
            <input className="explore__search__bar" type="search" placeholder="Search Twitter"/>
            <div className="hashtag__area">
                <div className="hasthag__area__header">
                    <h1 className="hasthag__area__header__text">What’s happening</h1>
                </div>
                <div className="news__feed">
                    <h6 className="news__feed__header">premier League</h6>
                    <p className="news__feed__text">Burnly VS Liverpool</p>
                    <img
                     className="match__pic"
                     src="https://pbs.twimg.com/semantic_core_img/1357797745881354243/VT73aIE7?format=jpg&name=small" 
                     alt="match pic"
                    />
                </div>
                <div className="trending-in-egypt">
                     <h6 className="trending-in-egypt-header">Trending in Egypt</h6>
                     <p className="hashtag">#GaZaUnderAttack</p>
                </div>
                <div className="trending-in-egypt">
                     <h6 className="trending-in-egypt-header">Trending globally</h6>
                     <p className="hashtag">#Fuck_israel</p>
                </div>
                <div className="trending-in-egypt">
                     <h6 className="trending-in-egypt-header">Trending in Egypt</h6>
                     <p className="hashtag">#سمير_غانم</p>
                </div>
                <div className="trending-in-egypt">
                     <h6 className="trending-in-egypt-header">Trending globally</h6>
                     <p className="hashtag">#Palastine</p>
                </div>
                    <div className="follow__header">
                    <h3 className="follow__header__text">Who to follow</h3>
               </div>
                <WhoToFollow 
                name={"mohamed__"} 
                avatar={"https://freesvg.org/img/Male-Avatar.png"}
                />
                <WhoToFollow 
                name={"TarekAhmed"} 
                avatar={"https://www.w3schools.com/w3images/avatar6.png"}
                />
                <WhoToFollow 
                name={"khaled_112"} 
                avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKI5AvNeOzxaidxKHqi_Er-SjmWFZfSySLA&usqp=CAU"}
                />
                <WhoToFollow 
                name={"Ahmed__11"} 
                avatar={"https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png"}
                />
            </div>
        </div>
    )
}

export default LeftSideBar;
