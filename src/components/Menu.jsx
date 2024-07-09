import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoPeopleOutline } from "react-icons/io5";
import { LuShoppingCart} from "react-icons/lu";
import { RiNewspaperLine } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserCog } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";


function Menu() {

  const data1=[
    {name:"Dashboard",icon:RxDashboard},
    {name:"Users",icon:IoPeopleOutline},
    {name:"Products",icon:LuShoppingCart},
    {name:"Orders",icon:RiNewspaperLine},
    {name:"Calendar",icon:IoCalendarNumberOutline}
  ]

  const data2=[
    {name:"Settings", icon: IoSettingsOutline},
    {name:"User Management", icon: LuUserCog},
    {name:"Help and Support", icon:MdOutlineSupportAgent}
  ]

  const mylist=data1.map((item)=>(
    <div className='flex items-center px-3 py-3 text-sm cursor-pointer rounded-2xl hover:bg-[#282a34]'>
      <item.icon className='mr-2' size={20}/>
      {item.name}
    </div>
  ))

  const mylist2=data2.map((item)=>(
    <div className='flex items-center px-3 py-3 text-sm cursor-pointer rounded-2xl hover:bg-[#282a34]'>
      <item.icon className='mr-2' size={20}/>
      {item.name}
    </div>
  ))

  return (
    <div className='mx-4 mt-6 mb-1 text-[#DDDDDF] font-bold'>
      <div className='text-sm  px-3 text-[#5E6777]'>
        MAIN MENU
      </div>
      <div className='mt-2'>
       {mylist}
      </div>
      <div className='mt-24'>
        {mylist2}
      </div>

    </div>
  )
}

export default Menu