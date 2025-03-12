import React from "react";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Meme from "./Components/Meme";
import MemeGenerator from "./Pages/MemeGenerator";

const App = () => {
  return (
    <div>
       <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/memes/:id" element={<Meme/>}/>
        <Route path="/generate-meme" element={<MemeGenerator/>}/>
      </Routes>
     </Router>
    </div>
  );
};

export default App;
