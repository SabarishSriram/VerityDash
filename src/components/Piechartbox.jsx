import React from 'react'
import { Cell, Pie, PieChart, Tooltip } from 'recharts'

function Piechartbox() {
    const data = [
        { name: 'Group A', value: 400, color:"#87DC41" },
        { name: 'Group B', value: 300, color:"#FFD93F" },
        { name: 'Group C', value: 300 , color:"#0E8DEA" },
        { name: 'Group D', value: 200, color:"#f018c1" },
      ];
    const datacolor=data.color;

  return (
    <div className='w-full h-full justify-center items-center'>
        <h1 className='font-extrabold text-xl text-center mt-6 hover:underline'>Leads By Source:</h1>
        <PieChart width={240} height={225}>
          <Tooltip contentStyle={{borderRadius:"10px", background:"white", border:"none"}}/>
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={90}
          fill="#000000"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}

export default Piechartbox