import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {HomePage} from '../screens/HomePage/homePage';
import {ContactPage} from "../screens/ContactPage/contactPage"

const RouteManager = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="index.html" element={<Navigate to={"/"}/>} />
        <Route path="" element={<HomePage/>}/>
        <Route path="/contact-us" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
};

export default RouteManager;