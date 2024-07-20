import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddTrip from './addTrip/index.jsx'
import Header from './components/custom/Header.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/addTrip',
    element:<AddTrip/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
