import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Bigchartbox() {

    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      
  return (
    <div className='flex w-full h-full justify-center items-center'>
         <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0, 
            bottom: 0,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"black", border:"none", borderRadius:"25px"}} labelStyle={{display:"none"}}  />
          <Area  type="monotone" dataKey="uv" stackId="1" stroke="" fill="#47018c" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="" fill="#6704c9" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="" fill="#7e02fa" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Bigchartbox