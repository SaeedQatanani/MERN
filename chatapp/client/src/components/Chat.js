import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import axios from 'axios'

const Chat = (props) => {
    const [socket] = useState(() => io(':8000'));
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    // const [notification, setNotification] = useState("");

    useEffect(() => {
        console.log("Running");
        socket.on("welcome", data => console.log(data));
        socket.on("message_to_chat", data => setMessages(prevMessages => {
            return [...prevMessages, data];
        }));
        socket.on("all_msgs_back", data => setMessages(prevMessages => {
            return [...prevMessages, data];
        }));
        // return () => socket.disconnect(true);
    }, []);
    const handelSubmit = e => {
        e.preventDefault();
        socket.emit("message_from_client", { msg: message, name: props.name });
        axios.post('http://localhost:8000/api/', { msg: message, name: props.name })
        .then(res => console.log(res))
        setMessage("");
    }
    return (
        <div style={{ width: "82%", maxHeight: "500px", overflow: "scroll", margin: "0 auto", border: "1px solid black" }}>
            <h1>Welcome, {props.name}</h1>
            {
                messages.map((msg, i) =>
                    (msg.name == props.name)?
                    <div key={i} style={{ width: "40%", margin: "0 0 0 auto", border: "1px solid red" }}>
                        {msg.name} { msg.name?<>said: </>:<></>} {msg.msg}
                    </div>
                    :
                    <div key={i} style={{ width: "40%", margin: "0 auto 0 0", border: "1px solid red" }}>
                        {msg.name} { msg.name?<>said: </>:<></>} {msg.msg}
                    </div>

                )
            }
            <form onSubmit={handelSubmit}>
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Chat