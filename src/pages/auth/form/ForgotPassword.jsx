import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toastify styles

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email };

    try {
      const response = await axios({
        url: "https://blog-backend-vq9g.onrender.com//forgot-password",
        method: "post",

        data,
      });

      setEmail(""); // Clear the email field
      toast.success("Link has been sent to your email"); // Show success notification
      navigate("/reset-password"); // Redirect to reset password page
    } catch (error) {
      toast.error("Failed to send reset link, please try again."); // Handle errors
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Ensure ToastContainer is rendered here */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 mb-2 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 transition-all duration-300"
          >
            Forgot Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
