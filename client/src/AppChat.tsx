import React, { useState } from 'react'
import { io } from 'socket.io-client'
import Chat from './components/Chat'
import './App.css'
const socket = io('http://localhost:3001')

const AppChat = () => {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room)
    }
  }
  return (
    <div className="App">
      <div className="joinChatContainer">
        <h2>Join Chat</h2>
        <input
          type="text"
          placeholder="hamza..."
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => {
            setRoom(event.target.value)
          }}
        />
        <button onClick={joinRoom}>Join A Room</button>
      </div>
      <Chat socket={socket} username={username} room={room} />
    </div>
  )
}

export default AppChat
