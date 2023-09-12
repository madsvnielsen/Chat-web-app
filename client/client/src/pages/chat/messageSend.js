
import { useState, useEffect } from 'react';

const MessageSend = ({ socket, name, room }) => {

    const [currentTypedMessage, setCurrentTypedMessage] = useState("");

    const sendMessage = () => {
        if(currentTypedMessage !== ""){
            socket.emit("send_message", {
                message: currentTypedMessage,
                name: name,
                room: room
            })
            setCurrentTypedMessage('')
        }
    }

    return(<div>

        <i>Enter message</i>
        <input onChange={(e)=>{setCurrentTypedMessage(e.target.value)}} value={currentTypedMessage}/>
        <button onClick={sendMessage}>Send</button>
    </div>);

};

export default MessageSend;