import {useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';

const TopChatInfo = ({ socket, palette, room }) => {
    const navigate = useNavigate();

    const styles= {
        header:{
          color: palette.fourth,
          fontSize: 25,
        },
        infoBar:{
            backgroundColor: palette.primary,
            padding: 5,
          borderRadius: 5,
            minHeight: 200,
        },
      usersContainer:{
        color: palette.fourth,
        width: "50%",
        marginLeft : "auto",
        marginRight : "auto"

      },
      usersHeader:{
        color: palette.fourth,
        fontSize: 20,
        marginBottom: 10

        
      },
        leaveButton:{
            color: palette.fourth,
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            cursor: "grab",
        }
    }

    useEffect(() => {
            socket.on('connected_users', (data) => {
                console.log(data);
                setActiveUsers(data);

            })
        });

    const [activeUsers, setActiveUsers] = useState([]);
    return (
        <div style={styles.infoBar}>
          <h1 style={styles.header}>Room {room}</h1>
          <div style={styles.usersHeader}>
             Active users 

           </div>
          <div style={styles.usersContainer}>
         
            {
             activeUsers.map((user, i) => (
                            <div><i>{user.name}</i></div>
                        ))}
          </div>

            <div style={styles.leaveButton} onClick={(e)=>{
                socket.disconnect();
                socket.connect(process.env.REACT_APP_API_URL);
                navigate('/', {replace: true});

            }}><u>Leave room</u></div>
        </div>
    );
};

export default TopChatInfo;
