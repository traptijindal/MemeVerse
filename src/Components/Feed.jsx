// import React from 'react'

// const images = [
//     "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//     "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
//     "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//     "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
//     "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//     "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
//   ];

// const Feed = () => {
//   return (
//     <div className="container mx-auto p-4">
//     <h2 className="text-2xl font-bold text-center mb-6">Image Gallery</h2>
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//       {images.map((src, index) => (
//         <div key={index} className="overflow-hidden rounded-lg shadow-lg">
//           <img
//             src={src}
//             alt={`Gallery ${index}`}
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       ))}
//     </div>
//   </div>
//   )
// }

// export default Feed


import React, { useEffect, useState } from "react";

const Feed = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        if (data.success) {
          setMemes(data.data.memes);
        }
      } catch (error) {
        console.error("Error fetching memes:", error);
      }
    };
    fetchMemes();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
        Memes
      </h1>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-5xl mx-auto">
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="break-inside-avoid mb-4 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={meme.url}
              alt={meme.name}
              className="w-full object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-80"
            />
            <div className="p-3 text-sm font-semibold">{meme.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
