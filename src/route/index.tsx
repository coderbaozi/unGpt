import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'

const router = createBrowserRouter([{
  path: '/',
  element: <Home/>,
  children: [
    {
      path: 'more',
    },
  ],
}])

export { router }
