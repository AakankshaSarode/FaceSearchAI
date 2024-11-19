import logo from './logo.svg';
import './App.css';
 import'./index.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from './components/Hero/Hero';
import About from './components/About/About';
 import Pricing from "./components/Payment/Payment";
import Feature from"./components/Feature/Feature";
 import Contact from "./components/Contact/Contact";

;function App() {
  return (
    <div >
      <Hero/>
      <About/>
      <Feature/>
      <Pricing/>
<Contact/>

   
    </div>
  );
}

export default App;
