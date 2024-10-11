import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './AuthContext';
import axiosInstance from './utils/axiosInstance';

const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = (e) => {
    let credential = {
        username: username,
        password: password,
    }

    e.preventDefault();

    // if (username === "admin" && password === "admin123") {
    //     login();
    //   navigate('/home')
    // } 

    axiosInstance.post('/auth/login', credential, {
        headers: {
            'Content-Type': 'application/json'
          },
        withCredentials: true,
        
    }).then((res) => {
        login()
        navigate('/home')
    }).catch((err) => {
        console.log(err)
    })
}
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center bg-slate-100 w-3/5 p-12'>
            <h1 className='text-3xl mb-8'>Dashboard</h1>
            <h1 className='text-xl mb-3'>Login to your account</h1>
            <form className='space-y-8 w-full'>
                <div className='space-y-6'>
                    <label for="uname">Username</label><br></br>
                    <input type='text' id="uname" name='uname' value={username} onChange={(e) => setUsername(e.target.value)} className='w-full text-black px-2'/><br></br>
                </div>
                <div className='space-y-6'>
                <label for="pword">Password</label><br></br>
                <input type='password' id="pword" name='pword' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full text-black px-2'/>
                </div>
            </form>
            <button className='border border-2 p-2 mt-8 rounded-md w-full hover:bg-white hover:text-black' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login