import React from "react";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Meme from "./Components/Meme";
import MemeGenerator from "./Pages/MemeGenerator";
import Profile from  './Pages/Profile.jsx'
import Login from "./Pages/Login.jsx";

const App = () => {
  return (
    <div>
       <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/memes/:id" element={<Meme/>}/>
        <Route path="/generate-meme" element={<MemeGenerator/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login />} />
        
      </Routes>
     </Router>
    </div>
  );
};

export default App;
