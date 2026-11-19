import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'


const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <p>this is a route to Login</p> },
  { path: '/register', element: <p>this is a route to Register</p> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)