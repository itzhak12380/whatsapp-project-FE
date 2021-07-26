import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css'
function Chat({messages}) {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at...</p>

                </div>
                <div className="chat__headerRight">
                    <IconButton><SearchOutlined /></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((mess)=>{
                    return (
                <p className={`chat__message ${mess?.reseived && 'chat__reciver'}`}>
                    <span className="chat__name">{mess?.name}</span>
                   {mess?.message}

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>

                </p>)
                })}
                 
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input 
                    placeholder="tye a message"
                    type="text" />
                    <button type="submit" >
                        sedn a message
                    </button>
                </form>
                    <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
