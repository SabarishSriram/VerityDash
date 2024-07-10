import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import { FiSearch } from "react-icons/fi";

function Chartbox(props) {

    const data = [
        { name: 'Page A', uv: 4000,pv: 2400,amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ]

  return (
    <div className='flex h-full mx-3 items-center justify-between'>
        <div className='flex flex-col justify-between flex-1'>
            <div className='flex items-center text-sm'>
                <p className='font-bold text-base'>{props.name}</p>
            </div>
            <p style={{color:props.textcolour}} className='font-bold text-xl py-[6px]'>{props.value}</p>
        </div>
        <div className='flex flex-col flex-1 justify-between'>
            <div className='w-full h-10'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={data}>
                        <Tooltip 
                            labelStyle={{display:"none"}} 
                            contentStyle={{background:"transparent", border:"0px",}}
                            position={{x:0,y:-50}}/>
                            
                        <Line 
                            type="monotone" 
                            dataKey="pv" 
                            stroke={props.colour} 
                            dot={false} 
                            strokeWidth={2.3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className=''>
                <p className={props.percentage>10?'text-green-500 font-bold text-right text-sm':'text-red-500 font-bold text-right text-sm'}><span>{props.sign}</span>{props.percentage}<span>%</span></p>
                <p className='text-xs text-right font-semibold text-[#a7a7a7]'>This month</p>
            </div>
        </div>
    </div>
  )
}

export default Chartbox