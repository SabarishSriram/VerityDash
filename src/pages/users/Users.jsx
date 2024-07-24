import React from 'react'
import Datatable from './components/Datatable'

function Users() {
  return (
    <div className='px-10'>
      <div>
        <p>Users</p>
        <button>Add New User</button>
      </div>
      <Datatable/>
    </div>
  )
}

export default Users