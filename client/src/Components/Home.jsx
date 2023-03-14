import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='home-buttons flex justify-center items-start gap-6 w-full h-screen bg-slate-700 p-12'>
        <NavLink to='/signup'><button className='bg-purple-500 w-40 rounded-xl p-4 text-white text-2xl mx-auto'>Signup</button></NavLink>
        <NavLink to='/login'><button className='bg-purple-500 w-40 rounded-xl p-4 text-white text-2xl mx-auto'>Login</button></NavLink>
        <NavLink to='/profile'><button className='bg-purple-500 w-40 rounded-xl p-4 text-white text-2xl mx-auto'>Profile</button></NavLink>
    </div>
  )
}

export default Home