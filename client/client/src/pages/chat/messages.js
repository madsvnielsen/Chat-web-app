
import { useState, useEffect, useRef } from 'react';

const Messages = ({ socket, palette }) => {



    const styles = {
        messageContainer:{
            backgroundColor: palette.secondary,
            height: "70vh",
            width: "70vw",
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginTop: 10,
            overflowY: "auto",

        },
        message:{
            margin: 20,
            maxWidth: "30vw",
            minWidth: "30vw",
            textAlign: "left",

        },
        ownMessage:{
            margin: 20,
            maxWidth: "30vw",
            minWidth: "30vw",
            textAlign: "left",
            marginLeft: "auto"

        },

        innerMessage:{
            backgroundColor: palette.third,
            textAlign: "left",
            boxShadow: '0px 1px 3px black',
            borderRadius: 15,
            color: palette.fourth,
            padding: 15,

        },
        nameLabel:{
            color: palette.fourth,
            margin: 5,
        },
        dateLabel:{
            color: palette.fourth,
            margin: 5,
            fontSize: 12,
            textAlign: "right"
        }
    }

    const [messagesRecieved, setMessagesReceived] = useState([]);
    const bottomEl = useRef(null);
    // Runs whenever a socket event is recieved from the server
    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log(data);
            setMessagesReceived((state) => [
                ...state,
                {
                    message: data.message,
                    name: data.name,
                    __createdtime__: data.timestamp,
                    own: data.own
                },
            ]);

            window.requestAnimationFrame(() =>{
                    scrollRef?.current?.scrollIntoView({behavior : "smooth"});

            })

        })

        // Remove event listener on component unmount
        return () => socket.off('receive_message');
    }, [socket]);


    const scrollRef = useRef(null);

    // dd/mm/yyyy, hh:mm:ss
    function formatDateFromTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString();
    }

    const messageList = useRef(null);

    return (
        <div style={styles.messageContainer}>
            {messagesRecieved.map((msg, i) => (
            <div id={"message"+i} style={msg.own ? styles.ownMessage: styles.message}>
                    <div style={styles.nameLabel}>{msg.name}</div>
                    <div style={styles.innerMessage}>
                        <p>{msg.message}</p>
                    </div>
            <div style={styles.dateLabel}>{formatDateFromTimestamp(msg.__createdtime__)}</div>
            </div>
    ))}
        <div ref={scrollRef}></div>
        </div>

    );
};

export default Messages;