import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  function toggleSignUp() {
    setSignUp(!signUp);
  }
  return (
    <div className="w-screen h-screen max-w-full max-h-full bg-gray-300 bg-home-bg inset-0">
      <Header />
      <div className="flex justify-center content-center max-w-full h-3/4 mx-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col p-5 content-center w-1/4 h-4/5 bg-black bg-opacity-80  m-auto
        shadow-lg shadow-gray-400"
        >
          <h1 className="text-center text-xl font-bold p-5 text-white">
            {signUp ? "Sign Up" : "Sign In"}
          </h1>
          {signUp && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-2 border-black px-2 py-2 bg-white m-4 focus:outline-none"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border-2 border-black px-2 py-2 bg-white m-4 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="border-2 border-black px-2 py-2 bg-white m-4 focus:outline-none"
          />
          <button className="border-2 border-black px-2 py-2 bg-blue-500 m-4">
            {signUp ? "Sign Up" : "Sign In"}
          </button>

          <p className="my-4 text-white">
            <span>
              {signUp ? "Already Registered? " : "New to Rangmanch? "}
            </span>
            <span
              onClick={toggleSignUp}
              className="hover:underline cursor-pointer"
            >
              {signUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
