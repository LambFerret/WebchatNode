import './Chat.css'
import socketio from 'socket.io-client';
import React, { useEffect, useState } from "react";
var socket = socketio("http://http://34.64.136.26:3001/")

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

    // <form id='form' onSubmit={emitMessage}>
    //     <input id="input" autoComplete="off" on={handleInput}/><button>Send</button>
    // </form>



    //   var socket = socketio.connect('http://localhost:3001');
    //   var messages = document.getElementById('messages');
    //   var form = document.getElementById("form");
    //   var input = document.getElementById("input");
    //   console.log(form);
    //   form.addEventListener('submit', (e) => {
    //     console.log(e)
    //     e.preventDefault();
    //     if (input.value) {
    //     console.log(input.value)
    //       socket.emit('chat message', input.value);
    //       input.value = '';
    //     }
    //   })
    //   socket.on("chat message", (msg) => {
    //     var item = document.createElement('li')
    //     item.textContent = msg
    //     messages.appendChild(item)
    //     window.scrollTo(0, document.body.scrollHeight)
    //   })
    //     return (

    //   <body>
    //     <ul id="messages"></ul>
    // <form id="form" action="">
    //   <input id="input" autoComplete="off" /><button>Send</button>
    // </form>
    // <script src="/socket.io/socket.io.js"></script>
    //   </body>
    //     )
}

export default Chat;
