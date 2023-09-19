import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import CreateRoom from './pages/createRoomPage';
import React, { useState } from 'react';
import io from 'socket.io-client';
import Chat from './pages/chat';
import { createTheme, ThemeProvider } from '@mui/material/styles/';

const socket = io.connect('http://localhost:5000')

const palette = {
    primary:'#32213A', // your primary color
    third: '#383B53', // your secondary color
    secondary:'#66717E',
    fourth: '#ffffff'
}
function App() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  return (
      <Router>
          <ThemeProvider theme={theme}>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"/>
        <div className='App'  style={{fontFamily: 'Montserrat'}}>
          <Routes>
            <Route path='/' element={
                <LoginPage
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
          </ThemeProvider>
      </Router>
  );
}

const theme = createTheme({
    palette: {
        primary: {
            main: palette.primary, // your primary color
        },
        secondary: {
            main: palette.secondary, // your secondary color
        },

    },
});


export default App;
