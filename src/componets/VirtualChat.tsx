import React from 'react'
import type { ReactNode } from 'react'
import type { MessageType } from '../types'
import Sender from './Sender'
import Receiver from './Receiver'

interface IProps {
  children?: ReactNode
  messageHistory?: MessageType[]
}
const VirtualChat: React.FC<IProps> = ({ messageHistory }) => {
  return <div className='h-full'>
    <div className='px-2 h-118 overflow-y-auto'>
      {
        messageHistory?.map(history =>
          history.type === 0
            ? <Sender key={history.msg} content={history.msg} />
            : <Receiver key={history.msg} content={history.msg} />)
      }
    </div>
  </div>
}

export default VirtualChat
