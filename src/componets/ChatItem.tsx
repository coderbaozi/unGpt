import React from 'react'
import type { ReactNode } from 'react'
import OpenAi from '../../public/icon/openai.svg'

interface IProps {
  children?: ReactNode
  chatName?: string
}
const ChatItem: React.FC<IProps> = ({ chatName }) => {
  return <div className='hover:bg-gray-200 cursor-pointer flex text-center flex-nowrap px-2 text-sm min-h-10 items-center border'>
    <div className='w-6 h-6'>
      <OpenAi></OpenAi>
    </div>
    <p className='w-full overflow-hidden'>{chatName}</p>
  </div>
}

export default ChatItem
