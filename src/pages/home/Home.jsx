import React from 'react'
import Navbar from '../../components/Navbar'
import Topleft from '../../components/Topleft'
import Chartbox from '../../components/Chartbox'

function Home() {
  return (
    <div className='grid grid-rows-4 grid-cols-4 gap-4 mx-6 my-1 '>

      <div className=' bg-gradient-to-tr from-[#111118] from-65% to-[#262833] rounded-2xl  row-span-3'>
        <Topleft/>
      </div>

      <div className='bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Chartbox
          name="Total Users:"
          value="21143"
          percentage="45"
          colour="#FFD93F"
          textcolour="#FFD93F"
          sign="+"
        />
      </div>
      <div className='bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Chartbox
          name="Total Returns:"
          value="34765.2"
          percentage="21.6"
          colour="#87DC41"
          textcolour="#87DC41"
          sign="+"/>
      </div>
      <div className='border row-span-3 px-5 py-10'>04</div>
      <div className='bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Chartbox
          name="Total Product:"
          value="124"
          percentage="8.6"
          colour="#0E8DEA"
          textcolour="#0E8DEA"
          sign="-"
        />
      </div>
      <div className='bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Chartbox
          name="Total Ratio:"
          value="1.8"
          percentage="11.2"
          colour="#5c1fbe"
          textcolour="#5c1fbe"
          sign="+"
        />
      </div>
      <div className='border row-span-2 col-span-2 px-5 py-10'>07</div>
      <div className='border px-5 py-10'>08</div>
      <div className='border px-5 py-10'>09</div>

    </div>
  )
}

export default Home