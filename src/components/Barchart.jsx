
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

function Barchart() {
    const data = [
      { name: 'Page A', Visit: 8342},
      { name: 'Page B', Visit: 13983},
      { name: 'Page C', Visit: 18254},
      { name: 'Page D', Visit: 10484},
      { name: 'Page A', Visit: 6023},
      { name: 'Page E', Visit: 12112},
      { name: 'Page F', Visit: 18886},
      { name: 'Page G', Visit: 21143},
        
      ];
    
  return (
    <div className='w-full'>
        <p className='font-bold text-base ml-4 mt-3'>Total Visit: <span className='text-[#f79502]'>32016</span></p>
        <div className='flex w-full h-20 '>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                    <Tooltip contentStyle={{border:"none", borderRadius:"10px", background:"#000000"}} labelStyle={{display:"none"}} cursor={{fill:"none"}}/>
                    <Bar dataKey="Visit" fill="#f79502" />
                </BarChart>
            </ResponsiveContainer>
        </div>
        
    </div>
  )
}

export default Barchart