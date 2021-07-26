import React from 'react'
import {Avatar} from '@material-ui/core'
import './SideBarChat.css'
function SideBarChat() {
    return (
        <div className="sideBarChat">
            <Avatar />
            <div className="SideBarChat__info">
                <h2>room name</h2>
                <p>this is the last message</p>
            </div>
        </div>
    )
}

export default SideBarChat
