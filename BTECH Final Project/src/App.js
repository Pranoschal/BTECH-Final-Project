import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Execute from "./components/Execute";
import Receive from "./components/Receive";
import Connect from "./components/Connect";
import Disconnect from "./components/Disconnect";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <>
      {/* probs */}
      <Navbar />

      <Routes>  
    <Route path="/" element={<Home />} />
    <Route path="/Execute" element={<Execute/>} />
    <Route path="/Receive" element={<Receive/>} />
    <Route path="/Connect" element={<Connect/>} />
    <Route path="/Disconnect" element={<Disconnect/>} />
    
    {/* console.log(#datasize.value); */}

</Routes>
      
    </>
  );
};

export default App;
