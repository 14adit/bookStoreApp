import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"


const Signup = () => {
  return (
    <div>
<div className=" flex h-screen justify-center items-center">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
     {/* Name */}
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" placeholder='Enter Full name' className='w-80 px-3 py-1 border rounded-md outline-none' />
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter the Email' className='w-80 px-3 py-1 border rounded-md outline-none' />
    </div>
      {/* Password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter the password' className='w-80 px-3 py-1 border rounded-md outline-none' />
    </div>
    <div className='flex justify-around mt-4'>
    <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300">Signup</button>
    <p>Already have an account? <a className='underline text-blue-500 cursor-pointer' onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</a></p>
    <Login />
    </div>
  </div>
</div>
    </div>
  )
}

export default Signup