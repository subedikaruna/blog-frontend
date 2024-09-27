import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  let token = localStorage.getItem("token");
  const [user, setUser] = useState({ name: "", role: "" });
  let navigate = useNavigate();

  // Function to handle form submission
  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      role: user.role,
      name: user.name,
    };

    // Call the API to update the profile
    try {
      const response = await axios({
        url: "https://blog-backend-vq9g.onrender.com//my-profile", // Assuming this is your update endpoint
        method: "patch",
        data: data, // Send user data to the API
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Profile updated successfully", response);
      navigate("/my-profile"); // Navigate to profile page after update
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  // Function to fetch user profile data
  const fetchProfile = async () => {
    try {
      const response = await axios({
        url: "https://blog-backend-vq9g.onrender.com//my-profile", // Profile endpoint
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.data;
      setUser({
        role: data.role,
        name: data.name,
      });
    } catch (error) {
      console.error("Error fetching profile", error);
    }
  };

  useEffect(() => {
    fetchProfile(); // Fetch user profile when component mounts
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
          Username:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          placeholder="Enter your name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name} // Controlled input
        />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 mb-2 font-medium">
          Role:
        </label>
        <input
          type="text"
          id="role"
          name="role"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          placeholder="Enter your role"
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          value={user.role} // Controlled input
          required
        />
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 transition-all duration-300"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateProfile;
