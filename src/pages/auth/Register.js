import React from "react";
import Form from "./form/Form";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const handleRegister = async (data, resetForm) => {
    try {
      const response = await axios.post(
        "https://blog-backend-vq9g.onrender.com//register",
        data
      );
      if (response.status >= 200 && response.status < 300) {
        toast.success("email has been sent to your account"); // Success notification
        resetForm(); // Call this function to reset the form fields
      } else {
        toast.error("Registration failed"); // Error notification for failure
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong"); // Error notification for exception
    }
  };

  return (
    <>
      <Form type="Register" onSubmit={handleRegister} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Register;
