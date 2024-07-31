import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <form className='col-12 d-flex flex-column align-items-center mt-4'>
        <h1>Sign In</h1>
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>E-mail:</span><br />
          <input type="email" className='col-12 p-2'/>
        </div>
        <br />
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>Password:</span><br />
          <input type="password" className='col-12 p-2'/>
        </div>
        <br />  
        <input type="submit" value={'Sign In'} className=' btn bg-primary text-light'/>
        <Link to={'/register'} className='mt-2'>Create An Account</Link>
      </form>
    </>
  )
}

export default Login