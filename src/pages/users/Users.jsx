import React from 'react'
import Datatable from './components/Datatable'

function Users() {
  return (
    <div>
      <div>
        <p>Users</p>
        <button>Add New User</button>
      </div>
      <Datatable/>
    </div>
  )
}

export default Users