import MessagesReceived from './messages';
import MessageSend from "./messageSend";
import TopChatInfo from "./topChatInfo";
const Chat = ({ socket, name, room , palette}) => {

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
            backgroundColor: palette.third,
            width: "100%",
            height: "100vh",
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

        }
    }


    return (
        <div style={styles.backgroundContainer}>
                <TopChatInfo room={room} palette={palette}/>
                <MessagesReceived socket={socket} palette={palette} />
                <MessageSend socket={socket} name={name} room={room} palette={palette}/>
        </div>
    );
};

export default Chat;