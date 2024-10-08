import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ type }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  // Effect hook to trigger blog creation
  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect to login if no token
      return;
    }
  }, []);

  // Function to create a new blog post
  const createBlog = async () => {
    const data = {
      title,
      avatar: image,
      description,
    };

    try {
      const response = await axios({
        url: "http://localhost:4000/blog",
        method: "POST",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        navigate("/"); // Redirect to home if blog is created successfully
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          {type}
        </h2>

        {/* Form for creating a new blog post */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            createBlog(); // Trigger blog creation
          }}
          method="post"
        >
          {/* Title input */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter the title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Image upload */}
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          {/* Description textarea */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter the description"
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
