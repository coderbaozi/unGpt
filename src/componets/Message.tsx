import React, { useState } from 'react'
import type { ReactNode } from 'react'
import { chat } from '../serve/api/api'
import type { MessageType } from '../types'
import Input from './Input'
import VirtualChat from './VirtualChat'

interface IProps {
  children?: ReactNode
}

const Message: React.FC<IProps> = () => {
  const [messageHistory, setMessageHistory] = useState<MessageType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  async function handleReceiveMessage(question: string) {
    setLoading(() => !loading)
    const { claude: receiveMessage } = await chat(question)
    setLoading(false)
    setMessageHistory(history => [...history, { type: 1, msg: receiveMessage }])
  }
  function handleInputText(content: string) {
    setMessageHistory(history => [...history, { type: 0, msg: content }])
    handleReceiveMessage(content)
    return content
  }
  return (
    <main className='h-full flex flex-col'>
      <div className='w-full p-2 flex-1'>
        {/* {虚拟列表} */}
        <VirtualChat messageHistory={messageHistory}></VirtualChat>
      </div>
      <Input loading={loading} handleInputText={handleInputText}></Input>
    </main>
  )
}

export default Message
