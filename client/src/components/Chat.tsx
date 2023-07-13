import React from 'react'

interface ChatProps {
  socket: any
  username: string
  room: string
}

const Chat: React.FC<ChatProps> = ({ socket, username, room }) => {
  return <div></div>
}

export default Chat
