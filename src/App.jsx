import React from "react";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
       <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </Router>
    </div>
  );
};

export default App;
