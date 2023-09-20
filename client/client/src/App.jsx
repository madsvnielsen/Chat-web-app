import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/loginpage';
import CreateRoom from './pages/createRoomPage';
import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import Chat from './pages/chat';
import { createTheme, ThemeProvider } from '@mui/material/styles/';

const socket = io.connect(process.env.REACT_APP_API_URL)

const palette = {
    primary:'#352F44', // your primary color
    third: '#5C5470', // your secondary color
    secondary:'#B9B4C7',
    fourth: '#FAF0E6',
    fifth: 'black',
}
function App() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const styles = {
        logo:{
            backgroundColor: palette.primary,
            color: palette.fourth,
            padding: 10,
            paddingLeft: 30,
            textAlign: "left",
            fontSize: 25
        }
    }



    return (
      <Router>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"/>
        <div className='App'  style={{fontFamily: 'Montserrat'}}>
            <div style={styles.logo}>quickChat</div>
          <Routes>
            <Route path='/' element={
                <Loginpage
                name={name}
                setName={setName}
                room={room}
                setRoom={setRoom}
                socket={socket}
                palette={palette}
                />

            } />
              <Route
                  path='/chat'
                  element={<Chat name={name} room={room} socket={socket} palette={palette} />}
              />
              <Route path='/createRoom' element={
                  <CreateRoom
                      name={name}
                      setName={setName}
                      room={room}
                      setRoom={setRoom}
                      socket={socket}
                      palette={palette}
                  />
              }/>
          </Routes>
        </div>
      </Router>
  );
}



export default App;
