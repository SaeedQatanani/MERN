import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'

const Chat = (props) => {
    const [socket] = useState(() => io(':8000'));
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const bottomRef = useRef(null);

    useEffect(() => {
        console.log("Running");
        socket.on("welcome", data => console.log(data));
        socket.on("messages_to_chat", data => setMessages(data));
    }, [socket]);

    useEffect(() => {
        socket.emit("new_user",  props.name);
    }, [props.name, socket]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handelSubmit = e => {
        e.preventDefault();
        socket.emit("message_from_client", { msg: message, name: props.name });
        setMessage("");
    }
    return (
        <div style={{ width: "82%", maxHeight: "300px", overflow: "auto", margin: "0 auto", border: "1px solid black" }}>
            <h1>Welcome, {props.name}</h1>
            {
                messages.map((msg, i) =>
                    (msg.name === props.name) ?
                        <div key={i} style={{ width: "40%", margin: "1% 0 1% auto", border: "1px solid black", backgroundColor: "#9fc5f8", boxShadow: "3px 3px 3px #777", borderRadius: "10px" }}>
                            <span><strong>You: </strong></span><br /> {msg.msg}
                        </div>
                        :
                        <div key={i} style={{ width: "40%", margin: "1% auto 1% 0", border: "1px solid black", backgroundColor: "#dddddd", boxShadow: "3px 3px 3px #777", borderRadius: "10px" }}>
                            <span><strong>{msg.name}</strong></span> {msg.name ? <>said: </> : <></>} <br /> {msg.msg}
                        </div>
                )
            }
            <form onSubmit={handelSubmit}>
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
                <input type="submit" value="Send" />
            </form>
            <div ref={bottomRef} />
        </div>
    )
}

export default Chat