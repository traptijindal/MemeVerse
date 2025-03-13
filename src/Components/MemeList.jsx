import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const MemeList = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "memes"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMemes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Latest Memes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {memes.map((meme) => (
          <div key={meme.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src={meme.imageUrl} alt="Meme" className="w-full h-auto rounded-lg" />
            <p className="text-gray-900 dark:text-white mt-2">{meme.caption}</p>
            <p className="text-sm text-gray-500">Uploaded by {meme.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeList;
