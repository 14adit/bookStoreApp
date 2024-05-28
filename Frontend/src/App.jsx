import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import {Route, Router, Routes } from 'react-router-dom';
import Courses from './components/Courses';
import Home from './Home/Home';
import Signup from './components/Signup';

const App = () => {
  return (
    <>
    <div className='dark:bg-slate-800 dark:text-white'>
    <Navbar />
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Courses' element={<Courses />} />
         <Route path='/Signup' element={<Signup />} />
       </Routes>
       <Footer />
    </div>
    </>
  );
}

export default App