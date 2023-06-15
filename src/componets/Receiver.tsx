import React from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  content: string
}
const Receiver: React.FC<IProps> = ({ content }) => {
  return <div>
    {`receiver${content}`}
  </div>
}

export default Receiver
