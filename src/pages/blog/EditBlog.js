import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { ToastContainer, toast } from "react-toastify";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Redirect if no token is found
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found! Please log in.");
      navigate("/login");
    }
  }, []);

  // Initialize blog state
  const [blog, setBlog] = useState({
    title: "",
    avatar: "",
    description: "",
  });

  // Fetch blog details to edit
  const fetchBlog = async () => {
    try {
      if (id) {
        const response = await axios.get(
          `https://blog-backend-vq9g.onrender.com/blog/${id}`
        );
        if (response.status === 200) {
          setBlog(response.data.data);
        } else {
          toast.error("Failed to fetch blog data.");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching blog.");
    }
  };

  // Update blog post
  const editBlog = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      if (id) {
        const response = await axios.patch(
          `https://blog-backend-vq9g.onrender.com/blog/${id}`,
          blog, // Send the updated blog data
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          toast.success("Blog updated successfully!");
          navigate("/");
        } else {
          toast.error("Failed to update blog.");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the blog.");
    }
  };

  // Fetch the blog data when component mounts
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <Layout>
      <ToastContainer />
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Edit Blog
          </h2>

          <form onSubmit={editBlog}>
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
                onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                value={blog.title || ""}
                name="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter the title"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Upload Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                onChange={(e) => setBlog({ ...blog, avatar: e.target.value })}
                value={blog.avatar || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter image URL"
                required
              />
            </div>

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
                onChange={(e) =>
                  setBlog({ ...blog, description: e.target.value })
                }
                value={blog.description || ""}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter the description"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditBlog;
