import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Users from './pages/users/Users';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Calendar from './pages/calendar/Calendar';



function App() {

  const Layout=()=>{
    return(
      <div className=''>

        <div className='b-[#121319] fixed z-3 bg-black'>
          <Navbar/>
        </div>
        
        <div className='flex'>

          <div className='bg-[#13151B]  w-52 fixed z-2 top-24 rounded-r-3xl'>
            <Menu/>
          </div>

          <div className='bg-[#08070F] z-1 pt-24 ml-52  text-white w-5/6' >
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
      path:'/Products',
      element:<Products/>
    },
    {
      path:'/Calendar',
      element:<Calendar/>
    }
  ]}])

  return (
    <RouterProvider router={router} />
  )
}

export default App