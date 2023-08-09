import './App.css';

import {Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage/Index';

// import axios from 'axios';
// import toast from 'react-hot-toast';

// import { useNavigate } from "react-router-dom";
// import { useState } from 'react';


function App() {
  return (
    <>
    <Routes>
    <Route path='/home' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
