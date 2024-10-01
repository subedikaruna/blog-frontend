import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import Navbar from "../../components/Navbar";

const SingleBlog = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const { id } = useParams();

  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    if (id) {
      const response = await axios.get(
        `http://localhost:4000/blog/${id}`,
        blog, // Send the updated blog data
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setBlog(response.data.data);
        console.log(id);
      } else {
        alert("Something went wrong");
      }
    }
  };

  const deleteBlog = async () => {
    const response = await axios.delete(`http://localhost:4000/blog/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    // <Layout>
    //   <div className="p-6 md:px-20">
    //     <h2 className="text-3xl font-semibold text-gray-900 mb-4">
    //       {blog?.title}
    //     </h2>
    //   </div>
    //   <div className="py-10 px-5 md:px-20" style={{ height: "40rem" }}>
    //     <img
    //       className="w-full object-cover rounded-lg shadow-lg"
    //       style={{ height: "100%" }}
    //       src={"http://localhost:4000/" + blog?.avatar}
    //       alt={"http://localhost:4000/" + blog?.title}
    //     />
    //     <div className="p-6">
    //       <p className="text-lg text-gray-700 mb-4">{blog?.description}</p>
    //       <p className="text-sm text-gray-500 mb-6">{blog?.createdAt}</p>
    //     </div>

    //     {token && (
    //       <div className="flex space-x-4 mt-6">
    //         <button
    //           onClick={() => navigate("/edit-blog/" + blog._id)}
    //           className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:shadow-lg hover:scale-105 focus:outline-none"
    //         >
    //           Edit
    //         </button>

    //         <button
    //           onClick={deleteBlog}
    //           className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-red-700 hover:shadow-lg hover:scale-105 focus:outline-none"
    //         >
    //           Delete
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </Layout>
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={"http://localhost:4000/" + blog?.avatar}
                  alt={"http://localhost:4000/" + blog?.title}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Link to={`/edit-blog/${id}`}>
                    <button
                      className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                      onClick={() => navigate("/edit-blog/" + blog._id)}
                    >
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={deleteBlog}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {blog.subtitle}
              </p>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {blog.description}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-6">{blog?.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
