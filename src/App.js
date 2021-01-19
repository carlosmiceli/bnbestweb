import React from 'react'
import './default.scss'
import NavB from './components/Navbar'
import Homepage from './pages/Homepage'
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavB/>
        <Homepage/>
        <Whatsapp/>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
