import './App.css';

import {Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage/Index';
import LoginPage from './Pages/LoginPage/Index';
import RegisterPage from './Pages/RegisterPage/Index';
import Merchandise from './Pages/MerchandisePage/Index'
import MyAccount from './Pages/MyAccountPage/Index';
import Transaction from './Pages/TransactionPage/Index';
import TnC from './Pages/TermsAndConditionsPage/Index';
import AboutUsPage from './Pages/AboutUsPage/Index';
import MyTicket from './Pages/MyTicketPage/Index';
import NotFound from './Pages/PageNotFound/Index';
import ListEvent  from './Pages/ListEventPage/Index';

// import axios from 'axios';
// import toast from 'react-hot-toast';

// import { useNavigate } from "react-router-dom";
// import { useState } from 'react';


function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/merchandise' element={<Merchandise />} />
    <Route path='/myaccount' element={<MyAccount />} />
    <Route path='/transaction' element={<Transaction />} />
    <Route path='/termsandconditions' element={<TnC />} />
    <Route path='/aboutus' element={<AboutUsPage />} />
    <Route path='/myticket' element={<MyTicket />} />
    <Route path='/*' element={<NotFound />} />
    <Route path='/listevent' element={<ListEvent/>} />
    </Routes>
    </>
  );
}

export default App;
