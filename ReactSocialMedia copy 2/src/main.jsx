import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import PostList, { postLoader } from './components/PostList.jsx'
import Forms from './components/Forms.jsx'
import { FORM } from './components/formConstant.js'
import { validationSchema } from './components/validation.js'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <PostList/>,
        loader:postLoader
      },
      {
        path: '/create-post',
        element: <Forms
        forms={FORM}
        schema={validationSchema}
        validateOn={"change"}/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
