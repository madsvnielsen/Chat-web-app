


import { useNavigate } from 'react-router-dom';


const LoginPage = ({ name, setName, room, setRoom, socket }) => {
    const navigate = useNavigate();
    const joinRoom = () => {
        if(room !== '' && name !== ''){
            socket.emit('join_room', {name, room})
            navigate('/chat', {replace: true})
        }
    }

    return (
        <div>
            <div>
                <h1>{`Join chat`}</h1>
                <input placeholder='Username'  onChange={(e)=>{setName(e.target.value); console.log(e.target.value);}}/>
                <select onChange={(e)=>{setRoom(e.target.value)}}>
                    <option>-- Select Room --</option>
                    <option value='test1'>test1</option>
                    <option value='test2'>test2</option>
                    <option value='test3'>test3</option>
                    <option value='test4'>test4</option>
                </select>

                <button className='btn btn-secondary' onClick={joinRoom}>Join Room</button>
            </div>
        </div>
    );
};

export default LoginPage;