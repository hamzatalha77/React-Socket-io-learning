import React, { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'

const socket: Socket = io('http://localhost:3001')
const App = () => {
  const [message, setMessage] = useState('')
  const [messageReceive, setMessageReceive] = useState('')
  const sendMessage = () => {
    socket.emit('send_message', { message })
  }
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceive(data.message)
    })
  }, [socket])
  return (
    <div className="App">
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value)
        }}
      />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      <p>{messageReceive}</p>
    </div>
  )
}

export default App
