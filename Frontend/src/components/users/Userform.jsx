import React from 'react'

const Userform = ({form, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-4 w-[200px] m-12'>
        <input 
          className='border-1 p-2'
          name='firstName' 
          type="text" 
          value={form.firstName}
          onChange={onChange}
          placeholder='FirstName'
          required
        />

        <input 
          className='border-1 p-2'
          name='lastName'
          value={form.lastName}
          onChange={onChange}
          type="text" 
          placeholder='LastName'
          required
        />

        <input 
          className='border-1 p-2'
          name='email'
          value={form.email}
          onChange={onChange}
          type="email" 
          placeholder='Email'
          required
        />

        <button 
          className='bg-green-400 p-2 rounded'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Userform