import React, { useEffect, useState } from 'react'
import p1 from "../../../assets/p1.jpeg"
import p2 from "../../../assets/p2.jpg";
import p3 from "../../../assets/p3.jpg";
import p4 from "../../../assets/p4.jpg";
import p5 from "../../../assets/p5.jpeg";


function Topleft() {
    const data=[
        {name:"Elva Mcdonald", email:"elva@gmail.com",deal:"+ $298.5", img:p1},
        {name:"Linnie Nelson", email:"linnie@gmail.com",deal:"+ $342.8", img:p2},
        {name:"Brent Reeves", email:"brent@gmail.com",deal:"+ $153.7", img:p3},
        {name:"Adeline Watson", email:"adelin@gmail.com",deal:"+ $214.4", img:p4},
        {name:"Juan Harrington", email:"juan@gmail.com",deal:"+ $535.2", img:p5}
    ]

    
    const list= data.map((item)=>(
        <div className='flex items-center mx-2 font-semibold my-[10px] text-sm justify-evenly'>
            <div>
                <img className='w-[42px] rounded-full' src={item.img} alt="" />
            </div>
            <div>
                <p>{item.name}</p>
                <p className='text-[#cfcfcf] text-xs font-medium'>{item.email}</p>
            </div>
            <div className='text-green-500'>
                {item.deal}
            </div>
        </div>
    ))
    

  return (
    <div className=''>
        <p className='font-extrabold text-[#F8F5F8] text-xl mx-6 my-5'>Top Deals</p>
        <div>
            {list}
        </div>
    </div>
  )
}

export default Topleft