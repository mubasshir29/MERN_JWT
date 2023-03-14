import React,{useState} from 'react'
import {userSignUp} from './../Utilities/api.js'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
    const defaultSignup = {
        first_name:"",
        last_name:"",
        email:"",
        password: ""
    }

    const [newUser,setNewUser]=useState(defaultSignup)

    const valueChange = (e)=>{
        setNewUser({...newUser, [e.target.name]:e.target.value})
    }

    const handleSignupButton = async(e)=>{
        e.preventDefault()
        const response = await userSignUp(newUser)
        if(response.status === 200)
        {
            navigate('/signupSuccess')
        }
        else console.log("There is an error")
    }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-700 p-6'>
        <div className='w-3/4 flex flex-col items-center'>
            <h2 className='text-4xl text-white'>Sign Up</h2>
            <form className='w-1/2 bg-slate-300 mx-auto mt-6 p-12 flex flex-col gap-6 rounded-xl'>
                <div className='flex-1 flex flex-col gap-1 w-full'>
                    <label>First name</label>
                    <input className='flex-1' name='first_name' type='text' onChange={e=>valueChange(e)}></input>
                </div>
                <div className='flex-1 flex flex-col gap-1 w-full'>
                    <label>Last name</label>
                    <input className='flex-1' name='last_name' type='text' onChange={e=>valueChange(e)}></input>
                </div>
                <div className='flex-1 flex flex-col gap-1 w-full'>
                    <label>Email</label>
                    <input className='flex-1' name='email' type='text' onChange={e=>valueChange(e)}></input>
                </div>
                <div className='flex-1 flex flex-col gap-1 w-full'>
                    <label>Password</label>
                    <input className='flex-1' name='password' type='password' onChange={e=>valueChange(e)}></input>
                </div>
            </form>
            <button className='bg-green-500 mt-6 p-2 text-white w-[120px] rounded-xl' onClick={e=>handleSignupButton(e)}>Signup</button>
        </div>
    </div>
  )
}

export default Signup