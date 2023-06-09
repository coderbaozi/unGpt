import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Message from '../componets/Message'

const router = createBrowserRouter([{
  path: '/',
  element: <Home/>,
  children: [
    {
      path: '/',
      element: <Message />,
    },
  ],
}])

export { router }
