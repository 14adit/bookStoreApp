import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import {Link, useParams} from "react-router-dom"
import axios from 'axios'
function Courses() {
  const [book,setBook] = useState([])
  useEffect(() => {
    axios
    .get("http://localhost:4002/api/books")
     .then((res)=>{
      console.log(res.data)      
       setBook(res.data)
     })
     .catch((error)=>{
       console.log("Error from showing books: ",error)
     })
  },[])
   
  const { id } = useParams()
  const Delete = (id) => {
    axios
     .delete(`http://localhost:4002/api/books/${id}`)
     .then((res) => {
      setBook(book.filter(book => book._id !== id))
      console.log("Book deleted successfully")
     })
     .catch((error) => {
      console.log("Error Occuring while deleting the book: ", error)
     })
  }
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500 font-semibold'>Here! :)</span></h1>
          <p className='mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex voluptatum doloribus nisi velit, labore autem, praesentium eligendi illo a id aspernatur non eius illum temporibus dolor aliquam consequuntur natus! Voluptatem!Ex voluptatum doloribus nisi velit, labore autem, praesentium eligendi illo a id aspernatur non eius illum temporibus dolor aliquam consequuntur natus! Voluptatem!</p>
          <Link to="/">
             <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-300">Back</button>
          </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item) => (
            <div>
              <Cards item={item} key={item._id} />
              <button onClick={()=>{Delete(item._id)}}>Delete</button>
            </div>
          ))
        }
        
       </div>
     </div>
    </>
  )
}

export default Courses