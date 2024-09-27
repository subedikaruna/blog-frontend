import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ type, onSubmit }) => {
  let navigate=useNavigate()
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Function to reset the form
  const resetForm = () => {
    setData({
      email: "",
      name: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data, resetForm); // Pass resetForm to onSubmit
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          {type === "Login" ? "Login to Your Account" : "Create a New Account"}
        </h2>
        <form onSubmit={handleSubmit}>
          {type === "Register" && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2 font-medium"
              >
                Username:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                placeholder="Enter your name"
                onChange={handleChange}
                value={data.name} // Controlled input
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2 font-medium"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              onChange={handleChange}
              value={data.email} // Controlled input
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 mb-2 font-medium"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              onChange={handleChange}
              value={data.password} // Controlled input
              required
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 transition-all duration-300"
            >
              {type}
            </button>
          </div>

        </form>

        {type === "Login" && (
          <div>
          <div  onClick={()=>{
            navigate("/forgot-password")
          }} className="text-indigo-500 hover:underline">
             Forgot-password?
            </div>
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-500 hover:underline">
              Sign up
            </a>
          </p>
          </div>
        )}
      </div>
   </div>
  );
};

export default Form;
