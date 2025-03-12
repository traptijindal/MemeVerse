import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Meme = () => {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        if (data.success) {
          const selectedMeme = data.data.memes.find((m) => m.id === id);
          setMeme(selectedMeme);
        }
      } catch (error) {
        console.error("Error fetching meme:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeme();
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (!meme) {
    return <p className="text-center text-xl text-red-500">Meme not found!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <h1 className="text-3xl font-bold mb-4">{meme.name}</h1>
      <img
        src={meme.url}
        alt={meme.name}
        className="w-full max-w-md rounded-lg shadow-lg"
      />
      <p className="text-gray-600 mt-2">ID: {meme.id}</p>
    </div>
  );
};

export default Meme;
