


import {Form, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import {FormControl, InputLabel, Select, MenuItem, Box, TextField, colors} from "@mui/material";

const CreateRoom = ({ name, setName, room, setRoom, socket, palette}) => {
    const styles = {
        loginContainer:{
            width: 200,
            height: 200,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: palette.third,
            padding: 5,
            borderRadius: 2,
            boxShadow: 5
        },
        backgroundContainer: {
            backgroundColor: palette.primary,
            padding: 5

        },
        header:{
            color: palette.fourth
        },
        inputStyle:{
            input:{
                color: palette.fifth,
                backgroundColor: palette.secondary,
                borderRadius: 1,
                fontFamily: 'Montserrat'

            },
            marginRight:"auto",
            marginBottom: 2,
            width: "100%",
            boxShadow: 1,

            label:{
                color: palette.fifth,
                fontFamily: 'Montserrat'
            },
            outline:{
                borderColor:"white",
            },


        },
        selectStyle: {
            backgroundColor: palette.secondary,
            color: palette.fifth,
            textAlign: "left",
            fontFamily: 'Montserrat',
            boxShadow: 1,


        },

        selectLabelStyle: {
            marginLeft: "auto",
            color: palette.fifth,
            fontFamily: 'Montserrat',



        },

        joinButtonStyle:{
            marginTop: 2,
            width: 180,
            height: 50,
            fontSize: 15,
            color: palette.fourth,
            fontWeight: "bold",
            backgroundColor:  palette.primary,
            fontFamily: 'Montserrat',

        },

        createRoomStyle:{
            color: "white",
            marginTop: 8,
            marginLeft: "auto",
            marginRight: "auto",
            textDecoration: "underline",
            cursor: "grab",
            width: 200
        }
    }



    document.body.style.backgroundColor = palette.primary;


    const navigate = useNavigate();
    const joinRoom = () => {
        if(room !== '' && name !== ''){
            socket.emit('join_room', {name, room})
            navigate('/chat', {replace: true})
        }
    }
    const joinExistingRoom = () => {
        navigate('/', {replace: true})
    }

    return (
        <div style={styles.backgroundContainer}>
            <div >
                <h1 style={styles.header}>{`Create room`}</h1>
                <Box
                    sx={styles.loginContainer}
                >

                    <TextField id="filled-basic"
                               label="Nickname"
                               variant="outlined"
                               onChange={(e)=>{setName(e.target.value);}}
                               sx={styles.inputStyle}

                    />
                    <TextField id="filled-basic"
                               label="Room name"
                               variant="outlined"
                               onChange={(e)=>{setRoom(e.target.value);}}
                               sx={styles.inputStyle}

                    />
                    <Button  variant="contained" onClick={joinRoom} sx={styles.joinButtonStyle}>Create room</Button>
                </Box>

            </div>
            <div  style={styles.createRoomStyle} onClick={joinExistingRoom}>Join a room instead</div>

        </div>
    );


};


export default CreateRoom;
