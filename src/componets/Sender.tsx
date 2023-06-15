import React from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  content: string
}
const Sender: React.FC<IProps> = ({ content }) => {
  return <div>
    {`sender${content}`}
  </div>
}

export default Sender
