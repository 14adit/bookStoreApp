import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const [token, setToken] = useState(null)

  const loginUser = async (data) => {
    try{
      const response = await axios.post('http://localhost:4002/api/users/login', data)
      setToken(response.data.token)
      toast.success("User Logged in Successfully")
      document.getElementById('my_modal_3').close();
      localStorage.setItem("Loggedin", JSON.stringify(true));
    }catch(error) {
      toast.error("Login failed")
    }
  }

  const onSubmit = (data) => console.log(data)

  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  }

  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(loginUser)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal} >✕</button></Link>
    <h3 className="font-bold text-lg">Login</h3>
     {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter the Email' {...register('email', { required: true })}  className='w-80 px-3 py-1 border rounded-md outline-none' />
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
      {/* Password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter the password' {...register('password', { required: true })}  className='w-80 px-3 py-1 border rounded-md outline-none'  />
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-4'>
    <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300" type='submit'>Login</button>
    <p>Not registered? <a className='underline text-blue-500 cursor-pointer' href='/Signup'>Signup</a></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login

