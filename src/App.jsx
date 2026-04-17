
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import DetailPage from './pages/DetailPage'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: ([
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/shop",
          element:<Shop/>
        },
        {
          path:"/detail-page",
          element:<DetailPage/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/checkout",
          element:<Checkout/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/profile",
          element:<Profile/>
        }




        
      ])
    }
  ],
{
  basename:"/templates/rj/cosmetic/4",
})
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
