import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import { useState } from 'react';
import io from 'socket.io-client';
import Chat from './pages/chat';

const socket = io.connect('http://localhost:5000')
function App() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={
                <LoginPage
                name={name}
                setName={setName}
                room={room}
                setRoom={setRoom}
                socket={socket}
                />

            } />
              <Route
                  path='/chat'
                  element={<Chat name={name} room={room} socket={socket} />}
              />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
