import React from "react";
import { getAuth } from "firebase/auth";
import { useDarkMode } from "../DarkModeContext.jsx";


const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
    const { darkMode, setDarkMode } = useDarkMode();
  if (!user) {
    return (
      <div className="text-center mt-10">
        <h2>Please <a href="/login" className="text-blue-500">Login</a> to view your profile.</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full" />
        <h2 className="text-xl text-black font-semibold mt-4">{user.displayName}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
