import React, { useState } from 'react'
import ChatBar from '../componets/ChatBar'
import ChatItem from '../componets/ChatItem'
import Layout from '../layout/Layout'
import Plus from '../../public/icon/plus.svg'
import Message from '../componets/Message'

function Home() {
  const [chatHistory, setChatHistory] = useState([{ uid: '0', chatName: 'chat1' }])
  function handleAddConversion() {
    setChatHistory(old => [...old, { uid: '1', chatName: 'chat1' }])
  }
  function handleData(data: any) {
    return JSON.stringify(data)
  }
  return (
    <>
    <Layout messageSlot={<Message/>}>
      <ChatBar>
        {chatHistory.map(chat => <ChatItem key={chat.uid} chatName={chat.chatName}></ChatItem>)}
        {<div onClick={handleAddConversion} className='hover:bg-gray-200 cursor-pointer flex items-center p-2 text-center items-center'>
            <div className='w-6 h-6'>
              <Plus></Plus>
            </div>
            <p className='w-full'>new chat</p>
          </div>}
      </ChatBar>
    </Layout>
    </>
  )
}

export default Home
