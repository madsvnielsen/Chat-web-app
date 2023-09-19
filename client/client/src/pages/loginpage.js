


import {Form, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import {FormControl, InputLabel, Select, MenuItem, Box, TextField, colors} from "@mui/material";
import {useEffect, useState} from "react";

const LoginPage = ({ name, setName, room, setRoom, socket, palette}) => {
    const styles = {
        loginContainer:{
            width: 300,
            height: 220,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: palette.third,
            padding: 5,
            borderRadius: 2,
            boxShadow: 5
        },
        backgroundContainer: {
            backgroundColor: palette.primary,
            width: "100%",
            height: "100vh",
            padding: 5

        },
        header:{
            color: palette.fourth
        },
        inputStyle:{
            input:{
                color: palette.fourth,
                backgroundColor: palette.secondary,
                borderRadius: 1,
                fontFamily: 'Montserrat'

            },
            marginRight:"auto",
            marginBottom: 2,
            width: "100%",
            boxShadow: 1,

            label:{
                color: palette.fourth,
                fontFamily: 'Montserrat'
            },
            outline:{
                borderColor:"white",
            },


        },
        selectStyle: {
            backgroundColor: palette.secondary,
            color: palette.fourth,
            textAlign: "left",
            fontFamily: 'Montserrat',
            boxShadow: 1,


        },

        selectLabelStyle: {
            marginLeft: "auto",
            color: palette.fourth,
            fontFamily: 'Montserrat',



        },

        joinButtonStyle:{
            margin: 5,
            width: 150,
            height: 50,
            fontSize: 15,
            color: palette.fourth,
            fontWeight: "bold",
            backgroundColor:  palette.secondary,
            fontFamily: 'Montserrat',

        },

        createRoomStyle:{
            color: "white",
            marginTop: 8,
            marginLeft: "auto",
            marginRight: "auto",
            textDecoration: "underline",
            cursor: "grab",
            width: "10%"
        }
    }





    const navigate = useNavigate();
    const joinRoom = () => {
        if(room !== '' && name !== ''){
            socket.emit('join_room', {name, room})
            navigate('/chat', {replace: true})
        }
    }

    const createRoom = () => {
        navigate('/createRoom', {replace: true})
    }

    const [joinableRooms, setJoinableRooms] = useState([]);
    let [didGetList, setDidGetList] = useState(false);

    useEffect(() => {
        if(!didGetList){
            socket.emit("get_rooms", null);
            setDidGetList(true)
        }

        socket.on('receive_rooms', (data) => {
            console.log(data);
            setJoinableRooms(data);

        })
    });



    return (
        <div style={styles.backgroundContainer}>
            <div >
                <h1 style={styles.header}>{`quickChat`}</h1>
                <Box
                    sx={styles.loginContainer}
                >

                    <TextField id="filled-basic"
                               label="Nickname"
                               variant="outlined"
                               onChange={(e)=>{setName(e.target.value);}}
                               sx={styles.inputStyle}

                    />
                <FormControl fullWidth>
                    <InputLabel id="room-select-label" sx={styles.selectLabelStyle}>Room</InputLabel>
                    <Select labelId={"room-select-label"}
                            id={"room-select"}
                            value={room}
                            label={"Room"}
                            sx={styles.selectStyle}
                            onChange={(event) => {setRoom(event.target.value)}}
                    >
                        {

                            joinableRooms.length > 0 ?
                            joinableRooms.map((room, i) => (
                            <MenuItem value={room}>{room}</MenuItem>
                        )) :

                                <MenuItem >No active rooms</MenuItem>
                        }

                    </Select>
                </FormControl>
                    <Button  variant="contained" onClick={joinRoom} sx={styles.joinButtonStyle}>Join Room</Button>
                </Box>

            </div>
            <div  style={styles.createRoomStyle} onClick={createRoom}>Create room</div>

        </div>
    );


};


export default LoginPage;