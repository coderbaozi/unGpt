import React from 'react'
import type { ReactNode } from 'react'
import OpenAi from '../../public/icon/openai.svg'

interface IProps {
  children?: ReactNode
  content: string
}
const Receiver: React.FC<IProps> = ({ content }) => {
  return <div className='flex gap-2'>
    <OpenAi style={{ width: 28, height: 28 }} />
    <div className='text-justify'>
      <p className='bg-neutral-200 py-1 px-2 rounded-md'>
        {`${content}`}
      </p>
    </div>
  </div>
}

export default Receiver
