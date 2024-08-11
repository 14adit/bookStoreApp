// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer';
// import {Route, Router, Routes } from 'react-router-dom';
// import Courses from './components/Courses';
// import Home from './Home/Home';
// import Signup from './components/Signup';
// import { Toaster } from 'react-hot-toast'

// const App = () => {
//   return (
//     <>
//     <div className='dark:bg-slate-800 dark:text-white'>
//     <Navbar />
//        <Routes>
//           <Route path='/' element={<Home />} />
//          {/* if(localStorage.getItem(User) === "true"){
//           <Route path='/Courses' element={<Courses />} />
//          }  */}
//          <Route path='/Courses' element={<Courses />} />
//          <Route path='/Signup' element={<Signup />} />
//        </Routes>
//        <Toaster />
//        <Footer />
//     </div>
//     </>
//   );
// }

// export default App

import React, { useState, useEffect } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Home from './Home/Home';
import Signup from './components/Signup';
import Login from './components/Login'; // Import the Login component
import { Toaster } from 'react-hot-toast';

const App = () => {
  // Check if the user is authenticated based on localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Debugging: Log local storage value
    const loggedIn = JSON.parse(localStorage.getItem('Loggedin')) === true;
    console.log('Is user logged in:', loggedIn);
    setIsAuthenticated(loggedIn);
  }, []);
  return (
    <div className="dark:bg-slate-800 dark:text-white">
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated && <Route path="/courses" element={<Courses />} />}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
        <Footer />
      
    </div>
  );
};

export default App;
