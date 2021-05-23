import {  Button } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SideBarComponent from './SideBarComponent';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import Login from './Login'

function SideBar() {
    
    return (
        <div>
            <TwitterIcon className="Twitter__icon" />
            <SideBarComponent active text="Home" Icon={HomeOutlinedIcon} />
            <SideBarComponent text="Explore" Icon={ExploreOutlinedIcon}/>
            <SideBarComponent text="Notifications" Icon={NotificationsNoneOutlinedIcon}/>
            <SideBarComponent text="Message" Icon={MessageOutlinedIcon} />
            <SideBarComponent text="Bookmarks" Icon={BookmarkBorderOutlinedIcon} />
            <SideBarComponent text="List" Icon={ListAltOutlinedIcon} />
            <SideBarComponent text="Profile" Icon={PersonOutlineIcon} />
            <SideBarComponent text="More" Icon={MoreHorizOutlinedIcon}/>
            <Button className="Tweet__button">Tweet</Button><br></br>
           <Login/>
        </div>
    )
}

export default SideBar
