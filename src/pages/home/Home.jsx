import React from 'react'
import Navbar from '../../components/Navbar'
import Topleft from '../../components/Topleft'

function Home() {
  return (
    <div className='grid grid-rows-4 grid-cols-4 gap-4 mx-6 my-2 '>
      <div className='row-span-3 border'><Topleft/></div>
      <div className='border px-5 py-10'>02</div>
      <div className='border px-5 py-10'>03</div>
      <div className='border row-span-3 px-5 py-10'>04</div>
      <div className='border px-5 py-10'>05</div>
      <div className='border px-5 py-10'>06</div>
      <div className='border row-span-2 col-span-2 px-5 py-10'>07</div>
      <div className='border px-5 py-10'>08</div>
      <div className='border px-5 py-10'>09</div>

    </div>
  )
}

export default Home