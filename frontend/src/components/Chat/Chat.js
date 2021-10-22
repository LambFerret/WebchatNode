import './Chat.css'
import socketio from 'socket.io-client';
import React, { useEffect, useState } from "react";

function Chat() {
    const [res, setRes] = useState("");
    useEffect(()=>{
        const socket = socketio("http://localhost:3001/")
        socket.on("chat message", data=>{
            setRes(data)
        })

    }, [])

    return (
        <div>
            <ul id="messages">
                <li value={res}></li>
                <form id='form'>
                <input id="input"/><button>Send</button>
                </form>
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
