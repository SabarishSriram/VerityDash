import React from 'react'
import Topleft from "./components/Topleft"
import Chartbox from './components/Chartbox'
import Barchart from './components/Barchart'
import Barchart2 from './components/Barchart2'
import Piechartbox from './components/Piechartbox'
import Bigchartbox from './components/Bigchartbox'

function Home() {
  const users = [
    { name: 'Page A', Users: 8342},
    { name: 'Page B', Users: 13983},
    { name: 'Page C', Users: 18254},
    { name: 'Page D', Users: 10484},
    { name: 'Page A', Users: 6023},
    { name: 'Page E', Users: 12112},
    { name: 'Page F', Users: 18886},
    { name: 'Page G', Users: 21143},
]

const returns = [
  { name: 'Page B', Returns: 25842.5},
  { name: 'Page C', Returns: 16136.6},
  { name: 'Page D', Returns: 29079.1},
  { name: 'Page E', Returns: 16369.7},
  { name: 'Page F', Returns: 27193.3},
  { name: 'Page G', Returns: 34765.2},
]
const product = [
  { name: 'Page A', Product: 352},
  { name: 'Page B', Product: 113},
  { name: 'Page C', Product: 321},
  { name: 'Page D', Product: 432},
  { name: 'Page E', Product: 480},
  { name: 'Page F', Product: 321},
  { name: 'Page G', Product: 124},
]
const ratio = [
  { name: 'Page A', Ratio: 3.4},
  { name: 'Page B', Ratio: 4.2},
  { name: 'Page C', Ratio: 3.2},
  { name: 'Page D', Ratio: 3.7},
  { name: 'Page E', Ratio: 2.9},
  { name: 'Page F', Ratio: 2.2},
  { name: 'Page G', Ratio: 1.8},
]

  return (
    <div className='grid grid-rows-4 grid-cols-4 gap-4 mx-6 my-1 '>

      <div className=' bg-gradient-to-tr from-[#111118] from-65% to-[#262833] rounded-2xl row-[span_3_/_span_4]'>
        <Topleft/>
      </div>

      <div className='bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Chartbox
          name="Total Users:"
          value="21143"
          percentage="45.6"
          colour="#FFD93F"
          textcolour="#FFD93F"
          sign="+"
          data={users}
          datakey="Users"
        />
      </div>
      <div className='bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Chartbox
          name="Total Returns:"
          value="34765.2 $"
          percentage="21.6"
          colour="#87DC41"
          textcolour="#87DC41"
          sign="+"
          data={returns}
          datakey="Returns"/>
          
      </div>
      <div className='row-span-3 bg-gradient-to-t flex from-[#111118] rounded-2xl to-[#262833] '>
        <Piechartbox/>
      </div>
      <div className='bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Chartbox
          name="Total Product:"
          value="124"
          percentage="8.6"
          colour="#0E8DEA"
          textcolour="#0E8DEA"
          sign="-"
          data={product}
          datakey="Product"
        />
      </div>
      <div className='bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Chartbox
          name="Total Ratio:"
          value="1.8"
          percentage="11.2"
          colour="#f018c1"
          textcolour="#f018c1"
          sign="+"
          data={ratio}
          datakey="Ratio"
        />
      </div>
      <div className='row-span-2 col-span-2 bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Bigchartbox/>
      </div>
      <div className=' bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833] row-[span_1_/_span_4]'>
        <Barchart/>
      </div>
      <div className='bg-gradient-to-t from-[#111118] rounded-2xl to-[#262833]'>
        <Barchart2/>
      </div>

    </div>
  )
}

export default Home