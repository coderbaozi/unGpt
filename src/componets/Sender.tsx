import React from 'react'
import type { ReactNode } from 'react'
import Thicker from '../../public/icon/thinker.svg'

interface IProps {
  children?: ReactNode
  content: string
}
const Sender: React.FC<IProps> = ({ content }) => {
  return <div className='p-2 '>
    <div className='flex flex-row-reverse items-center gap-2'>
      <Thicker style={{ width: 28, height: 28 }}/>
      <p className=' py-1 px-2 rounded-md bg-sky-300'> {`${content}`}</p>
    </div>

  </div>
}

export default Sender
