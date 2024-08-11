import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
const Freebook = () => {
  const [book,setBook] = useState([])
  useEffect(() => {
    axios
    .get("http://localhost:4002/api/books")
     .then((res)=>{
      const fetchData = res.data.filter((data) => data.category === "Free")
      console.log(fetchData);      
       setBook(fetchData);
     })
     .catch((error)=>{
       console.log("Error from showing books: ",error)
     })
  },[])
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
       <h1 className='font-semibold text-xl'>Free offered course</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga odit beatae error quidem cum delectus deserunt, omnis minus alias laborum culpa sint, libero totam, exercitationem recusandae voluptatum consequuntur porro laboriosam.</p>
     </div>
     <div>
     <div className="slider-container">
      <Slider {...settings}>
        {book.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
   </div>
 </div>
    </> 
  );
}

export default Freebook;