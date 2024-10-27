import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import WorkoutSessions from "./Components/WorkoutSessions";
import Gallery from "./Components/Gallery";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import BMICalculator from "./Components/BMICalculator";
import Footer from "./Components/Footer";

const App = () => {
  // Get the current location using the useLocation hook
  const location = useLocation();

  return (
    <>
      {/* Navbar should be outside of Routes so it shows on every page */}
      <Navbar /> 
      
      {/* Define all the routes */}
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/wks" element={<WorkoutSessions />} />
        <Route path="/gall" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      

      {/* Conditionally render BMICalculator only on the "/home" page */}
      {location.pathname === "/home" && <BMICalculator />}
      
      {/* Footer will be rendered on every page */}
      <Footer />

      <ToastContainer theme="dark" position="top-center" />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
  
);

export default AppWrapper;
