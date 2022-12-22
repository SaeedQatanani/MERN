import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const Chat = () => {
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        console.log("Running");
        socket.on("welcome", data => console.log(data));
        return () => socket.disconnect(true);
    }, []);
  return (
    <div>
        <h1>Welcome</h1>
    </div>
  )
}

export default Chat