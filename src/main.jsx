import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Static from './components/Static'

const router = createBrowserRouter([
  {
    path: '/',
    element:<App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/static',
        element: <Static></Static>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}></RouterProvider>)
