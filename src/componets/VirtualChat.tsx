import React from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  sendHistory?: string[]
}
const VirtualChat: React.FC<IProps> = ({ sendHistory }) => {
  return <div>
    {sendHistory?.map(history => <div>{history}</div>)}
  </div>
}

export default VirtualChat
