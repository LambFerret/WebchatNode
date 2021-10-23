import './Chat.css'
import socketio from 'socket.io-client';
import React, { useEffect, useState } from "react";
var socket = socketio("http://34.64.136.26:3001/")

function Chat() {
    const [msg, setMsg] = useState('');
    const [chat, setChat] = useState([]);

    useEffect(() => {
        socket.once("chat message", (msg) => {
            setChat([...chat, msg])
        })
    }, [chat])

    const renderChat = () => {
        return chat.map((number,index) => <div key={index}><li >{number}</li></div>)
    }

    const onTextChange = e => {
        setMsg(e.target.value)
    }

    const onMessageSubmit = (e) => {
        e.preventDefault()
        socket.emit("chat message", msg)
        setMsg("")
    }

    return (
        <div>
            <ul id="messages">
                <form id='form' onSubmit={onMessageSubmit}>
                    <input id='input' value={msg} onChange={onTextChange} />
                    <button>SendPlz</button>
                </form>
                <div className="render-chat">
                    <h1>render chat</h1>
                    {renderChat()}
                </div>
            </ul>
        </div>
    )
}

export default Chat;
