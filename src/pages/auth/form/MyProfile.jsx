import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  let token = localStorage.getItem("token");
  let [profile, setProfile] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found! Please log in.");
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);
  const fetchProfile = async () => {
    try {
      const response = await axios({
        url: "https://blog-backend-vq9g.onrender.com//my-profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setProfile(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="bg-white max-w-2xl mx-auto mt-10 p-6 shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-lg">
        <h3 className="text-lg leading-6 font-bold text-gray">My Profile</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-600">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.name}
            </dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-600">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.email}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-600">Role</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.role}
            </dd>
          </div>
        </dl>
      </div>
      <button
        className="text-indigo-500 hover:underline"
        onClick={() => {
          navigate("/update-profile");
        }}
      >
        Update Profile
      </button>
      <div>
        {" "}
        <button
          className="text-indigo-500 hover:underline"
          onClick={() => {
            navigate("/update-password");
          }}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
