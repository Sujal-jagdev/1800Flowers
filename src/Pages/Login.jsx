import React from 'react'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../Services/firebase'

const Login = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <form className='col-12 d-flex flex-column align-items-center mt-4'>
        <h1>Sign In</h1>
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>E-mail:</span><br />
          <input type="email" className='col-12 p-2' />
        </div>
        <br />
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>Password:</span><br />
          <input type="password" className='col-12 p-2' />
        </div>
        <br />
        <input type="submit" value={'Sign In'} className=' btn bg-primary text-light' />
        <hr className='col-6' />
        <GoogleButton onClick={handleLogin} />
        <Link to={'/register'} className='mt-2'>Create An Account</Link>
      </form>
    </>
  )
}

export default Login