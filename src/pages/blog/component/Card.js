import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://blog-backend-vq9g.onrender.com/blog");
      if (response.status === 200) {
        setBlogs(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Column me neatly.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              This is your life and ending one minute at a time
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link key={blog.id} to={`/${blog._id}`}>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={"http://localhost:4000/" + blog.avatar}
                      alt={blog.title}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <a href="#" className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">
                          {blog.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {blog.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Roel Aufderehar</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            Roel Aufderehar
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <p>2020-03-16</p>
                          <span aria-hidden="true">·</span>
                          <span>6 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <div className="min-h-screen bg-gray-50">
    //     <div className="py-10 px-5 md:px-20">
    //       <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
    //         All Blogs
    //       </h1>

    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {blogs.map((blog) => (
    //           <div
    //             key={blog._id}
    //             className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
    //           >
    //             <img
    //               className="w-full  object-cover"
    //               style={{ height: "20rem" }}
    //               src={"http://localhost:4000/"+blog.avatar}
    //               alt={blog.title}
    //             />
    //             <div className="p-6">
    //               <h2 className="text-2xl font-semibold text-gray-900 mb-2">
    //                 {blog.title}
    //               </h2>
    //               <p className="text-gray-700 mb-4 line-clamp-3">
    //                 {blog.description}
    //               </p>
    //               <p className="text-sm text-gray-500 mb-4">
    //                 {new Date(blog.createdAt).toLocaleDateString()}
    //               </p>
    //             </div>
    //             <div className="p-6 border-t">
    //               <button
    //                 className="w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:shadow-lg hover:scale-105 focus:outline-none"
    //                 onClick={() => navigate(`/${blog._id}`)}
    //               >
    //                 See More
    //               </button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
