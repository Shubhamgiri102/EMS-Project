import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="border-2 border-red-600 p-6 rounded-lg bg-white shadow-md">
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
