import React from 'react';
import "./index.css";
import Header from './component/Header';
import Slider from "./component/Slider";
import Footer from './component/Footer';
import Welcome from './component/welcome-ckg';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <main className="main">
      <Slider />
      <Welcome />
      </main>

      <Footer />
    </div>
    
      
    
    
  )
}

export default App;
