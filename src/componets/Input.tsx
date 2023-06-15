import React, { useRef } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  loading?: boolean
  handleInputText: (text: string) => string
}
const Input: React.FC<IProps> = ({ loading, handleInputText: emitInputText }) => {
  const textRef = useRef<HTMLTextAreaElement>(null)
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      emitInputText(textRef.current!.value)
      textRef.current!.value = ''
    }
  }
  return <div>
    <textarea disabled={loading} ref={textRef} onKeyDown={handleKeyDown}
      placeholder='talk to me'
      className='outline outline-gray-200 p-3 w-full h-30'>
     </textarea>
  </div>
}

export default Input
