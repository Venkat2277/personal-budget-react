import react from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Menu from './Menu/Menu';
//import AboutPage from './AboutPage/AboutPage';
//import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Hero/>
      <HomePage/> 
      <Footer/>
      
    </div>
  );
}

export default App;
