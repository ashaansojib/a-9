import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Static from './components/Static'
import JobDetails from './components/JobDetails'
import AppliedJob from './components/AppliedJob'
import cartProductsLoader from './Utils/CardData'
import ErrorPage from './components/ErrorPage'
import Blog from './components/Blog'

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
        element: <JobDetails />,
        loader: async ({ params }) => {
          const res = await fetch(`job_data.json`);
          const data = await res.json();
          const jobId = params.id;
          const job = data?.find(job => job.id === jobId);
          return job;
        }
      }
      ,
      {
        path: '/appliedjob',
        element: <AppliedJob></AppliedJob>,
        loader: cartProductsLoader,
      },
      {
        path: '/static',
        element: <Static></Static>,
        loader: ()=> fetch('marks.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
