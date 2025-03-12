import React, { useState, useRef } from "react";
import { FiUpload, FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";
import { IoCreateSharp } from "react-icons/io5";
import { useDarkMode } from "../DarkModeContext.jsx";

const MemeGenerator = () => {
  const [image, setImage] = useState(null);
  const { darkMode, setDarkMode } = useDarkMode();
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const memeRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const downloadMeme = () => {
    if (!memeRef.current) return;
    
    html2canvas(memeRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "meme.png";
      link.click();
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-center space-y-4">
      <div className="flex items-center gap-4">
      <IoCreateSharp size={30}/>
      <h1 className="text-3xl font-bold"> Create Your Meme</h1>
      </div>
      <label className="cursor-pointer flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        <FiUpload size={20} />
        <span>Upload Image</span>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
      </label>
      {image && (
        <div ref={memeRef} className="relative w-full max-w-md text-white bg-white p-4 shadow-lg rounded-lg ">

          <h2 className="text-2xl font-bold text-center absolute top-2 left-0 right-0  bg-black bg-opacity-50 p-1">
            {topText}
          </h2>
          
          <img src={image} alt="Meme" className="w-full h-auto rounded-lg " />
          <h2 className="text-2xl font-bold text-center absolute bottom-2 left-0 right-0 text-white bg-black bg-opacity-50 p-1">
            {bottomText}
          </h2>
        </div>
      )}
     <input
  type="text"
  placeholder="Top Text"
  className={`p-2 border rounded w-full ${
    darkMode ? "border-white text-white bg-[#2c2c2c]" : "border-gray-700 text-black bg-white"
  }`}
  value={topText}
  onChange={(e) => setTopText(e.target.value)}
/>

<input
  type="text"
  placeholder="Bottom Text"
  className={`p-2 border rounded w-full ${
    darkMode ? "border-white text-white bg-[#2c2c2c]" : "border-gray-700 text-black bg-white"
  }`}
  value={bottomText}
  onChange={(e) => setBottomText(e.target.value)}
/>

      {image && (
        <button
          onClick={downloadMeme}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          <FiDownload size={20} />
          Download Meme
        </button>
      )}
    </div>
  );
};

export default MemeGenerator;