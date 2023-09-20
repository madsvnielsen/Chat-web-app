import MessagesReceived from './messages';
import MessageSend from "./messageSend";
import TopChatInfo from "./topChatInfo";
import RoomInfo from "./roomInfo"; 
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
        },
        chattingContainer: {
            width: "auto",
            maxWidth: 800,
            padding: 10,
            marginLeft: "auto",
            marginRight : "auto"
        },
      infoContainer: {
      width: "auto",
      maxWidth: 800,
        marginLeft: "auto",
          marginRight : "auto",
        padding: 10,
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

    document.body.style.backgroundColor = palette.third;

    return (
        <div style={styles.backgroundContainer}>

              <div style={styles.chattingContainer}>
                <MessagesReceived socket={socket} palette={palette} />
                <MessageSend socket={socket} name={name} room={room} palette={palette}/>
              </div>
              <div style={styles.infoContainer}>
                <RoomInfo socket={socket} palette={palette} room={room}/>
              </div>
        </div>
    );
};

export default Chat;
