import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  let navigate = useNavigate();
  let [query] = useSearchParams();
  let [password, setPassword] = useState(""); // Remove async from the component
  let token = query.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      password,
    };
    try {
      let response = await axios({
        url: "https://blog-backend-vq9g.onrender.com//reset-password",
        method: "PATCH",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error(error); // Always handle errors in some way
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 mb-2 font-medium"
        >
          Password
        </label>
        <input
          type="password" // Consider using 'password' instead of 'text' for better security
          id="password"
          name="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          placeholder="Enter your new password"
          onChange={(e) => setPassword(e.target.value)} // Corrected onChange
          value={password}
          required
        />
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 transition-all duration-300"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
