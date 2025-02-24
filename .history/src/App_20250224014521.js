import React from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Menu from './Menu/Menu';
//import AboutPage from './AboutPage/AboutPage';
//import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      div
      <HomePage/> 
      <Footer/>
      
    </Router>
  );
}

export default App;
