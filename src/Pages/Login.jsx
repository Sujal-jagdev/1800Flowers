import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../Services/firebase'
import { flowersData } from '../Context'
import Summer from './Summer'
import axios from 'axios'

const Login = () => {
  const { isLog, setisLog, setLogSuccess } = useContext(flowersData)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [myEmail, setmyEmail] = useState('')
  const [mypassword, setmypassword] = useState('')

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setisLog(true)
      })
      .catch((err) => console.log(err))
  }
  axios.get('http://localhost:8000/RegisterData').then((res) => {
    res.data.map((e) => {
      setmyEmail(e.email);
      setmypassword(e.password)
    })
  })
  const handleLogin2 = (e) => {
    e.preventDefault()

    if (email == '' || password == '') {
      alert('Must Be Filled Email Password')
    }
    else if (email == myEmail && password == mypassword) {
      alert('You Are Success Fully Login')
      setLogSuccess(true)
    }
    else {
      alert("!!E-mail OR Password Are wrong!!")
    }
  }
  return (
    <>
      <form className='col-12 d-flex flex-column align-items-center mt-4'>
        <h1>Sign In</h1>
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>E-mail:</span><br />
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='col-12 p-2' />
        </div>
        <br />
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>Password:</span><br />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='col-12 p-2' />
        </div>
        <br />
        <input type="submit" onClick={(e) => handleLogin2(e)} value={'Sign In'} className=' btn bg-primary text-light' />
        <hr className='col-6' />
        <GoogleButton onClick={handleLogin} />
        <Link to={'/register'} className='mt-2' >Create An Account</Link>
      </form>
    </>
  )
}

export default Login