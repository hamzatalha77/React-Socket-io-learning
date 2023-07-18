import React, { useEffect, useState } from 'react'
import '../App.css'

interface Message {
  room: string
  author: string
  message: string
  time: string
}

interface ChatProps {
  socket: any
  username: string
  room: string
}

const Chat: React.FC<ChatProps> = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState<string>('')
  const [messageList, setMessageList] = useState<Message[]>([])
  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes()
      }
      await socket.emit('send_message', messageData)
      setMessageList((list) => [...list, messageData])
    }
  }
  useEffect(() => {
    socket.on('receive_message', (data: Message) => {
      setMessageList((list) => [...list, data])
    })
  }, [socket])
  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {messageList.map((messageContent, index) => {
          return <h1 key={index}>{messageContent.message}</h1>
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value)
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat
