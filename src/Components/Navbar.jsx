import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useDarkMode } from "../DarkModeContext.jsx";

const Navbar = () => {
    const { darkMode, setDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`w-full p-4 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MemeVerse 🎭
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/explore" className="hover:text-blue-500">Explore</Link>
          <Link to="/upload" className="hover:text-blue-500">Upload</Link>
          <Link to="/leaderboard" className="hover:text-blue-500">Leaderboard</Link>
          <Link to="/profile" className="hover:text-blue-500">Profile</Link>
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
          <Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/explore" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Explore</Link>
          <Link to="/upload" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Upload</Link>
          <Link to="/leaderboard" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Leaderboard</Link>
          <Link to="/profile" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Profile</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

