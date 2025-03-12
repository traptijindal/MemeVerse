import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext.jsx";
import { FiUpload } from "react-icons/fi";

const Feed = () => {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [category, setCategory] = useState("all");
  const { darkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        if (data.success) {
          setMemes(data.data.memes);
          setFilteredMemes(data.data.memes); 
        }
      } catch (error) {
        console.error("Error fetching memes:", error);
      }
    };
    fetchMemes();
  }, []);

  
  const filterMemes = (category) => {
    setCategory(category);
    if (category === "all") {
      setFilteredMemes(memes);
    } else if (category === "trending") {
      setFilteredMemes(memes.slice(0, 10)); 
    } else if (category === "popular") {
      setFilteredMemes(
        memes.filter((meme) =>
          ["Drake", "Distracted", "Spongebob", "Expanding Brain", "Mocking"].some(
            (keyword) => meme.name.includes(keyword)
          )
        )
      );
    } else if (category === "funny") {
      setFilteredMemes(
        memes.filter((meme) =>
          [
            "Funny",
            "Laugh",
            "Troll",
            "Sarcastic",
            "Face",
            "Triggered",
            "LOL",
            "Meme Man",
            "Mocking SpongeBob",
            "Clown"
          ].some((keyword) => meme.name.toLowerCase().includes(keyword.toLowerCase()))
        )
      );
    } else if (category === "relatable") {
      setFilteredMemes(
        memes.filter((meme) =>
          ["Change My Mind", "Expanding Brain", "Waiting Skeleton", "Mocking"].some(
            (keyword) => meme.name.includes(keyword)
          )
        )
      );
    }
  };

  return (
    <div className="p-4 min-h-screen">
  
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        📰 Breaking News: Memes Have Taken Over! 🎭
      </h1>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["all", "trending", "popular", "funny", "relatable"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded ${
              category === cat ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => filterMemes(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-7xl mx-auto">
  {filteredMemes.map((meme) => (
    <Link to={`memes/${meme.id}`} key={meme.id}>
      <div
        className="break-inside-avoid mb-4 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 
        bg-white shadow-md hover:shadow-xl border border-gray-300"
      >
        <img
          src={meme.url}
          alt={meme.name}
          className="w-full object-cover rounded-t-lg transition-opacity duration-300"
        />
        <div className="p-3 text-sm md:text-[16px] font-semibold text-gray-900 dark:text-gray-200">
          {meme.name}
        </div>
      </div>
    </Link>
  ))}
</div>
<Link
  to="/upload"
  className="flex items-center gap-2 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-[170px] h-[50px] md:w-[220px] md:h-[70px] px-6 py-3 rounded-lg shadow-lg 
  hover:bg-blue-600 transition text-sm md:text-lg font-semibold z-50"
>
  <FiUpload size={22} />
  <span>Upload Meme</span>
</Link>

    </div>
  );
};

export default Feed;
