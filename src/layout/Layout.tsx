import React from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
