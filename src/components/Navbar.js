import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-10 lg:px-20 py-10 shadow-md">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <a href="/blog" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Blogs
          </span>
        </a>

        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 text-sm font-medium">
          <li>
            <a
              href="/blog"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              All Blogs
            </a>
          </li>

          <li>
            <a
              href="/create-blog"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              Create Blog
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              Register
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/my-profile"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              My Profile
            </a>
          </li>
          <li>
            <a
              href="/logout"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
