import React from 'react'
import { FiSearch } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { BsChatText } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import Logo from '../assets/logo.png'


function Navbar() {
  return (
    <div>
      <div className='flex h-24 items-center border-b border-[#1e212b]'>
        <div className='flex items-center'>
          <img src={Logo} className='w-16' alt="" />
          <p className='text-white tracking-wider font-semibold text-xl text-left '>VerityDash</p>
        </div>
        
        <div className='flex border-[1.5px] focus-within:border-[#5c1fbe] border-[#323232] rounded-2xl ml-16 items-center bg-[#111218]'>
          <FiSearch size={20} className='text-[#DDDDDF] mx-[15px] my-2' />
          <input type="text" placeholder='Search Something...' className='bg-[#111218] focus:outline-none w-40 font-semibold placeholder:m-1 text-md  text-[#DDDDDF] text-xs' />
          <button className='text-[#DDDDDF] bg-[#5c1fbe] text-xs px-4 py-1 border rounded-lg border-[#323232] font-bold mx-2'>Search</button>
        </div>

        <div className='text-[#DDDDDF] border border-[#323232] bg-[#111218] py-2 px-3 rounded-3xl flex ml-[490px] gap-4 '>
          <LuBell size={20} />
          <BsChatText size={20} />
          <IoIosSettings size={20} />
        </div>
        <div className='text-[#DDDDDF] border border-[#323232] bg-[#111218] py-2 px-3 rounded-3xl flex ml-8 gap-4'>
          <MdOutlineWbSunny size={20} />
          <IoMoonOutline size={20} />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar