import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useDarkMode } from "../DarkModeContext.jsx";

const Navbar = () => {
    const { darkMode, setDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const location=useLocation();


  return (
    <nav className={`w-full p-4 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MemeVerse 🎭
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`pb-1 ${location.pathname === "/" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`}>Home</Link>
          <Link to="/generate-meme" className={`pb-1 ${location.pathname === "/generate-meme" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`}>Generate Meme</Link>
          <Link to="/upload" className={`pb-1 ${location.pathname === "/upload" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`}>Upload</Link>
          <Link to="/leaderboard" className={`pb-1 ${location.pathname === "/leaderboard" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`}>Leaderboard</Link>
          <Link to="/profile" className={`pb-1 ${location.pathname === "/profile" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`}>Profile</Link>
        </div>

        <div className="flex items-center space-x-4">
  
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>

   
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`md:hidden flex flex-col items-center space-y-4 mt-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"} p-4`}>
          <Link to="/" className={`pb-1 ${location.pathname === "/" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/generate-meme" className={`pb-1 ${location.pathname === "/generate-meme" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`}>Generate Meme</Link>
          <Link to="/upload" className={`pb-1 ${location.pathname === "/upload" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`} onClick={() => setMenuOpen(false)}>Upload</Link>
          <Link to="/leaderboard" className={`pb-1 ${location.pathname === "/leaderboard" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`} onClick={() => setMenuOpen(false)}>Leaderboard</Link>
          <Link to="/profile" className={`pb-1 ${location.pathname === "/profile" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500"}`} onClick={() => setMenuOpen(false)}>Profile</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

