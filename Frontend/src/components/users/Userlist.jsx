import React from 'react'

const Userlist = ({ user, onDelete}) => {
  return (
    <div className='border-1 m-4 mb-16 w-[1000px]'>
      <div className='grid grid-cols-6 p-4 bg-blue-200'>
        <div>ID</div>
        <div>FirstName</div>
        <div>LastName</div>
        <div>Email</div>
        <div>Password</div>
        <div>Action</div>
      </div>
      {user.map(data => {
        return (
          <div key={data.id}>
            <div className='grid grid-cols-6 px-4 m-1'>
              <div>{data.id}</div>
              <div>{data.firstName}</div>
              <div>{data.lastName}</div>
              <div>{data.email}</div>
              <div>{data.password}</div>
              <div>
                <button 
  className='bg-red-500 px-2 rounded-sm text-white cursor-pointer hover:bg-red-700'
  onClick={() => onDelete(data.id)}
>
  Delete
</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Userlist     
