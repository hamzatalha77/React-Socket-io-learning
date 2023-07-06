import React from 'react'
import io, { Socket } from 'socket.io-client'

const socket: Socket = io('http://localhost:3001')
const App = () => {
  const sendMessage = () => {
    // socket.emit()
  }
  return (
    <div className="App">
      <input placeholder="Message..." />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App
