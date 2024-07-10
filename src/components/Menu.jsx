import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoPeopleOutline } from "react-icons/io5";
import { LuShoppingCart} from "react-icons/lu";
import { RiNewspaperLine } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserCog } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import { data } from 'autoprefixer';


function Menu() {

  const data1=[
    {name:"Dashboard",icon:RxDashboard, number:1},
    {name:"Users",icon:IoPeopleOutline, number:2},
    {name:"Products",icon:LuShoppingCart, number:3},
    {name:"Calendar",icon:IoCalendarNumberOutline,number:4}
  ]

  const data2=[
    {name:"Settings", icon: IoSettingsOutline},
    {name:"User Management", icon: LuUserCog},
    {name:"Help and Support", icon:MdOutlineSupportAgent}
  ]
  const [bg, setbg] = useState(null)
  const handleclick=(buttonnumber)=>{
    setbg(buttonnumber)
  }


  const mylist=data1.map((item)=>(
    <div onClick={()=>handleclick(item.number)} className={bg===item.number?'flex items-center px-3 py-3 text-sm cursor-pointer rounded-2xl bg-[#282a34]':'flex items-center px-3 py-3 text-sm cursor-pointer rounded-2xl hover:bg-[#282a34]'}>
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
    <div className='mx-4 mt-6 mb-1 text-[#DDDDDF] font-bold h-full'>
      <div className='text-sm  px-3 text-[#5E6777]'>
        MAIN MENU
      </div>
      <div className='flex flex-col justify-between h-5/6'>
        <div className='mt-2'>
        {mylist}
        </div>
        <div className='mt-36'>
          {mylist2}
        </div>
      </div>
      

    </div>
  )
}

export default Menu