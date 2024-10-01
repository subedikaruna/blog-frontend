import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../index.css";
const MyProfile = () => {
  let token = localStorage.getItem("token");
  let [profile, setProfile] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return; // Redirect to login if no token
    }
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios({
        url: "http://localhost:4000/my-profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          User database
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details and informations about user.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Role</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.role}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.email}
            </dd>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition"
              onClick={() => {
                navigate("/update-profile");
              }}
            >
              Update Profile
            </button>
            <button
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition"
              onClick={() => {
                navigate("/update-password");
              }}
            >
              Update Password
            </button>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default MyProfile;
