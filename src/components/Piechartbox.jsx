import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

function Piechartbox() {
    const data = [
        { name: 'Mobile', value: 500, color:"#87DC41" },
        { name: 'Laptop', value: 300, color:"#FFD93F" },
        { name: 'Tablet', value: 200 , color:"#0E8DEA" },
        { name: 'Desktop', value: 100, color:"#f018c1" },
      ];

    const value=data.map((item)=>
      <div className='flex flex-col justify-center items-center'>
        <p>{item.name}</p>
        <p>{item.value} </p>
      </div>)
  return (
    <div className='w-full flex flex-col items-center'>
      <div>
        <p className='font-extrabold w-full text-xl mt-4 hover:underline'>Leads By Source:</p>
      </div>
      <div className='w-full justify-center items-center mt-5'>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Tooltip contentStyle={{background:"#DDDDDF", borderRadius:"15px", border:"transparent"}}/>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            border="transparent"
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
        
      </div>
      <div className='flex w-full justify-between items-center px-5'>
          <div className=''>
            <div className='flex flex-col justify-center items-center font-bold text-[#87DC41]'>
              <p>Mobile:</p>
              <p>500</p>
            </div>
            <div className='flex flex-col justify-center items-center font-bold text-[#FFD93F]'>
              <p>Laptop:</p>
              <p>300</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col justify-center items-center font-bold text-[#0E8DEA]'>
              <p>Tablet:</p>
              <p>200</p>
            </div>
            <div className='flex flex-col justify-center items-center font-bold text-[#f018c1]'>
              <p>Desktop:</p>
              <p>100</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Piechartbox