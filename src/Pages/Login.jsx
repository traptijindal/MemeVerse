import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig"; 

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
      navigate("/profile"); 
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Login</h2>
        <button
          onClick={handleGoogleLogin}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

