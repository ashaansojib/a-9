import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Static from './components/Static'
import JobDetails from './components/JobDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobdetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`job_data.json`)
          .then(response => response.json())
          .then(data => {
            const jobId = params.id;
            const job = data.find(job => job.id === jobId);
            return job;
          })
      },
      {
        path: '/static',
        element: <Static></Static>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
