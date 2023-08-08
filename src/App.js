import './App.css';

import {Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage/Index';
import LoginPage from './Pages/LoginPage/Index';
import RegisterPage from './Pages/RegisterPage/Index';


// import axios from 'axios';
// import toast from 'react-hot-toast';

// import { useNavigate } from "react-router-dom";
// import { useState } from 'react';


function App() {
  return (
    <>
    <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/loginpage' element={<LoginPage />} />
    <Route path='/registerpage' element={<RegisterPage />} />
    </Routes>
    </>
  );
}

export default App;
