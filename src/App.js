import React from 'react';
import Header from './Component/Header/Header';
import Homepage from './Component/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './Component/About/About';
import Resume from './Component/Resume/Resume';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          {/* Specify the root path ("/") */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Resume" element={<Resume/>} />
          {/* <Route path="/Service" element={<Service />} />
          <Route path="/Portfolio" element={<Portfolio />} /> */}
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

