import React from 'react'

function Login() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-700 p-6 '>
        <div className='w-3/4 flex flex-col items-center'>
            <h2 className='text-4xl text-white'>Login</h2>
            <form className='w-1/2 bg-slate-300 mx-auto mt-6 p-12 flex flex-col gap-6 rounded-xl'>
                <div className='flex-1 flex flex-col gap-1 w-full items-start'>
                    <label>Email</label>
                    <input className='w-full' name='email' type='text'></input>
                </div>
                <div className='flex-1 flex flex-col gap-1 items-start'>
                    <label>Password</label>
                    <input className='w-full' name='password' type='password'></input>
                </div>
            </form>
            <button className='bg-green-500 mt-6 p-2 text-white w-[120px] rounded-xl'>Login</button>
        </div>
    </div>
  )
}

export default Login