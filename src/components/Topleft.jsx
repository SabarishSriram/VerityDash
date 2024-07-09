import React from 'react'

function Topleft() {
    const data=[
        {name:"Elva Mcdonald", email:"elva@gmail.com",deal:"$298.5", img:{}},
        {name:"Linnie Nelson", email:"linnie@gmail.com",deal:"$342.8", img:{}},
        {name:"Brent Reeves", email:"brent@gmail.com",deal:"$153.7", img:{}},
        {name:"Adeline Watson", email:"adeline@gmail.com",deal:"$214.4", img:{}},
        {name:"Juan Harrington", email:"juan@gmail.com",deal:"$535.2", img:{}}
    ]

  return (
    <div>
        <p className='font-extrabold text-lg p-3'>Top Deals</p>

    </div>
  )
}

export default Topleft