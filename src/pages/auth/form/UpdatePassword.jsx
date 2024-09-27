import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  let token = localStorage.getItem("token");
  const [user, setUser] = useState({ oldPassword: "", newPassword: "" });
  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    // Check if token exists
    if (!token) {
      console.error("No token found, redirecting to login.");
      navigate("/login");
      return;
    }

    let data = {
      oldPassword: user.oldPassword,
      newPassword: user.newPassword,
    };

    try {
      const response = await axios({
        url: "https://blog-backend-vq9g.onrender.com//update-password",
        method: "patch",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data,
      });

      // Check if the password update was successful
      if (response.data.success) {
        console.log("Password updated successfully", response);

        // Clear the form after successful update
        setUser({
          oldPassword: "",
          newPassword: "",
        });

        localStorage.removeItem("token");
        navigate("/logout");
      } else {
        // Handle the case where the update failed

        // Optionally, display an error message to the user
        alert(response.data.message);
      }
    } catch (error) {
      alert("old password is wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="oldPassword"
          className="block text-gray-700 mb-2 font-medium"
        >
          Old Password
        </label>
        <input
          type="text"
          id="oldPassword"
          name="oldPassword"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          placeholder="Enter your old password"
          onChange={(e) => setUser({ ...user, oldPassword: e.target.value })}
          value={user.oldPassword}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="newPassword"
          className="block text-gray-700 mb-2 font-medium"
        >
          New Password
        </label>
        <input
          type="text"
          id="newPassword"
          name="newPassword"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          placeholder="Enter your new password"
          onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
          value={user.newPassword}
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

export default UpdatePassword;
