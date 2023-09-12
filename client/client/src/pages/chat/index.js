import MessagesReceived from './messages';
import MessageSend from "./messageSend";
const Chat = ({ socket, name, room }) => {
    return (
        <div >
            <div>
                <MessagesReceived socket={socket} />
                <MessageSend socket={socket} name={name} room={room}/>
            </div>
        </div>
    );
};

export default Chat;