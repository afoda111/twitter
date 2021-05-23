import React from 'react'
import './SideBar.css'
function SideBarComponent({active,text, Icon}) {
    return (
        <div className="SideBar__contain">
            <div className={`sidebar ${active && 'sidebar__active'}`}>
                <Icon/>
                <h2 className="sidebar__text">{text}</h2>
            </div>
        </div>
       
    )
}

export default SideBarComponent
