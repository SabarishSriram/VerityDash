import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/material';

function Piechartbox() {
    const data = [
        { name: 'Group A', value: 400, color:"#87DC41" },
        { name: 'Group B', value: 300, color:"#FFD93F" },
        { name: 'Group C', value: 300 , color:"#0E8DEA" },
        { name: 'Group D', value: 200, color:"#f018c1" },
      ];

  return (
    <div className='w-full flex flex-col items-center'>
      <div>
        <p className='font-extrabold w-full text-xl mt-6 hover:underline'>Leads By Source:</p>
      </div>
      <div className='w-36 mt-5'>
        <PieChart
            series={[
              {
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 20, additionalRadius: -20, color: 'gray' },
              },
              
            ]}
              width={240}
              height={200}
            />
      </div>
    </div>
  )
}

export default Piechartbox