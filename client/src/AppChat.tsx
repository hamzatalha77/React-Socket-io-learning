import React, { useState } from 'react'
import { io } from 'socket.io-client'

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
    <div>
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
      <button>Join A Room</button>
    </div>
  )
}

export default AppChat
