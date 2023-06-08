import React from 'react'
import type { ReactNode } from 'react'
import UnGpt from '../../public/icon/unGpt.svg'
import Plus from '../../public/icon/plus.svg'

interface IProps {
  children?: ReactNode
}
const ChatBar: React.FC<IProps> = ({ children }) => {
  return <div className='h-screen w-[200px] border border-orange-400'>
    <div className='flex items-center p-2 text-center items-center'>
        <div className='w-6 h-6'>
          <UnGpt></UnGpt>
        </div>
        <h2 className='w-full'>conversions</h2>
    </div>
    <ul>
      {children}
    </ul>
    <div>
      <div className='cursor-pointer flex items-center p-2 text-center items-center'>
        <div className='w-6 h-6'>
          <Plus></Plus>
        </div>
        <p className='w-full'>new chat</p>
      </div>
    </div>
  </div>
}

export default ChatBar
