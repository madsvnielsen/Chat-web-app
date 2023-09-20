
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import {FormControl, InputLabel, Select, MenuItem, Box, TextField, colors} from "@mui/material";
import { FaArrowRight } from 'react-icons/fa';
const MessageSend = ({ socket, name, room, palette}) => {

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
    const styles = {
        messageSendContainer:{
            backgroundColor: palette.secondary,
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,


        },
        messageInput : {
            width: "70%",

            marginTop: 2,
                input:{

                    color: palette.fourth,
                    backgroundColor: palette.primary,
                    borderRadius: 1,
                    padding: 2,
                    fontFamily: 'Montserrat',
                    minHeight: 30,

                },
            marginRight:"auto",
                marginBottom: 2,

                boxShadow: 1,
                label:{
                    color: palette.fourth,
                    fontFamily: 'Montserrat'
                },
                outline:{
                    borderColor:"white",
                },
        },
        sendButton:{
            width: 60,
            marginTop: 2,
            height: 60,
            marginBottom: 2,
            marginLeft: 2,
            fontSize: 15,
            color: palette.fourth,
            fontWeight: "bold",
            backgroundColor:  palette.primary,
            fontFamily: 'Montserrat',

        }
    }

    const handleKeyPress = (e) => {
        if(e.key ==="Enter"){
            sendMessage();
        }
    }

    return(
        <div style={styles.messageSendContainer}>

        <TextField onChange={(e)=>{setCurrentTypedMessage(e.target.value)}} value={currentTypedMessage} sx={styles.messageInput} variant="outlined" placeholder={"Message"} onKeyDown={handleKeyPress}/>
        <Button variant={"outline"} onClick={sendMessage} sx={styles.sendButton}><FaArrowRight size={20}/></Button>
    </div>);

};

export default MessageSend;