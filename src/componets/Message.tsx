import React, { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { http } from '@tauri-apps/api'
import Input from './Input'
import VirtualChat from './VirtualChat'

interface IProps {
  children?: ReactNode
}

const Message: React.FC<IProps> = () => {
  const [sendHistory, setSendHistory] = useState<string[]>([])
  const [data, setData] = useState<any>()
  useEffect(() => {
    http.fetch('https://dog.ceo/api/breeds/image/random', {
      method: 'GET',
    }).then((res) => {
      setData(JSON.stringify(res.data))
    })
  }, [])
  function handleInputText(content: string) {
    setSendHistory(history => [...history, content])
    return content
  }
  return (
    <main className='h-full flex flex-col'>
      <p>{data}</p>
      <div className='w-full p-2 flex-1'>
        {/* {虚拟列表} */}
        <VirtualChat sendHistory={sendHistory}></VirtualChat>
      </div>
      <Input handleInputText={handleInputText}></Input>
    </main>
  )
}

export default Message
