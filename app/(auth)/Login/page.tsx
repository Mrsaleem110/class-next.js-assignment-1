import React from 'react'

const Login = () => {
  return (
    <div className='bg-slate-500'>
      <h1 className='bg-red-500 text-center' >Login Page</h1>
      <form  className='border-slate-950 border-line-4 text-center '>
       <input type='text' placeholder='Enter@Username'/>
       <input type='password' placeholder='Enter Password'/>
       <div>
       <button type='submit' className='bg-blue-600'>Login</button>
       </div>
      </form>
    </div>
  )
}

export default Login
