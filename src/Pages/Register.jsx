import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { flowersData } from '../Context'

const Register = () => {
  const { LogSuccess, setLogSuccess } = useContext(flowersData)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Name, setName] = useState('');

  const handleLogin2 = (e) => {
    e.preventDefault()
    let logData = {
      Name,
      email,
      password
    }
    if (password == '' || email == '' || Name == '') {
      alert("Feil All Fields")
    }
    else {
      axios.post('http://localhost:8000/RegisterData', logData).then((res) => {
        alert("You Are Registered")
        setLogSuccess(true)
      })
    }
  }
  return (
    <>
      <form className='col-12 d-flex flex-column align-items-center mt-4'>
        <h1>Register</h1>
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>Name:</span><br />
          <input onChange={(e) => setName(e.target.value)} value={Name} type="text" className='col-12 p-2' />
        </div>
        <br />
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>E-mail:</span><br />
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='col-12 p-2' />
        </div>
        <br />
        <div className='col-lg-3 col-md-5 col-sm-6 col-10'>
          <span>Password:</span><br />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='col-12 p-2' />
        </div>
        <input type="submit" onClick={(e) => handleLogin2(e)} value={'Sign Up'} className=' btn bg-primary text-light mt-3' />
      </form>
    </>
  )
}

export default Register