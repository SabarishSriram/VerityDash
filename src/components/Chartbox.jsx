import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import { FiSearch } from "react-icons/fi";

function Chartbox(props) {

    const data = [
        { name: 'Page A', users: 2400},
        { name: 'Page B', users: 1398},
        { name: 'Page C', users: 9800},
        { name: 'Page D', users: 3908},
        { name: 'Page E', users: 4800},
        { name: 'Page F', users: 3800},
        { name: 'Page G', users: 4300},
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
                    <LineChart width={300} height={100} data={props.data}>
                        <Tooltip 
                            labelStyle={{display:"none"}} 
                            contentStyle={{background:"transparent", border:"0px",}}
                            position={{x:-20,y:-55}}/>
                            
                        <Line 
                            type="monotone" 
                            dataKey={props.datakey} 
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