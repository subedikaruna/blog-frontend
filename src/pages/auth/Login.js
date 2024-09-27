import React from "react";
import Form from "./form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        "https://blog-backend-vq9g.onrender.com//login",
        data
      );
      let token = response.data.token;
      console.log("Token from response:", token);
      localStorage.setItem("token", token);

      if (response.status === 200) {
        navigate("/my-profile");
      } else {
        toast.error("login failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <>
      <ToastContainer />
      <Form type="Login" onSubmit={handleLogin}></Form>
    </>
  );
};

export default Login;
