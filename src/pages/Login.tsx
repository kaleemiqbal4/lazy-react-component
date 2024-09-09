import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const loginHandle = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-teal-900 mb-8">Login</h1>

      <form
        onSubmit={loginHandle}
        className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105 duration-300"
      >
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-transform transform hover:scale-105 duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
