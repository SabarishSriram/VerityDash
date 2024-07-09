import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Users from './pages/users/Users';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Navbar from './components/Navbar'
import Menu from './components/Menu'



function App() {

  const Layout=()=>{
    return(
      <div className=''>

        <div className='b-[#121319] bg-black'>
          <Navbar/>
        </div>
        
        <div className='flex'>

          <div className='bg-[#13151B] w-56 rounded-r-3xl'>
            <Menu/>
          </div>

          <div className='bg-[#08070F]  text-white w-5/6' >
            <Outlet/>
          </div>  

        </div>

      </div>
    )
  }

  const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/Users',
      element:<Users/>
    },
    {
      path:'/products',
      element:<Products/>
    }
  ]}])

  return (
    <RouterProvider router={router} />
  )
}

export default App