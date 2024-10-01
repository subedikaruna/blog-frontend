import React from "react";
import Form from "./form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/login", data);
      let token = response.data.token;
      //console.log("Token from response:", token);
      localStorage.setItem("token", token);
      //console.log(token);

      navigate("/");
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
