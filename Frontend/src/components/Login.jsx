import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
    <h3 className="font-bold text-lg">Login</h3>
     {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter the Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}/>
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
      {/* Password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter the password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })} />
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-4'>
    <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300">Login</button>
    <p>Not registered? <a className='underline text-blue-500 cursor-pointer' href='/Signup'>Signup</a></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login