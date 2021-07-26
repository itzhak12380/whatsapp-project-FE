import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton,Avatar} from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SideBarChar from './SideBarChat'
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <div className="sidebar__headerRight">
                    <IconButton><ChatIcon/></IconButton>
                    <IconButton><DonutLargeIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chat">
                    <SideBarChar/>
                    <SideBarChar/>
                    <SideBarChar/>
                    <SideBarChar/>
            </div>
        </div>
    )
}

export default SideBar
