import React from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  messageSlot?: any
}

const Layout: React.FC<IProps> = ({ children, messageSlot }) => {
  return (
    <div>
      <main className='flex'>
        <nav>
          {children}
        </nav>
        <div className='flex-1'>
          {messageSlot}
        </div>
      </main>
    </div>
  )
}

export default Layout
