import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  let [query] = useSearchParams();
  let token = query.get("token");
  let navigate = useNavigate();
  let emailVerify = async () => {
    try {
      let result = await axios({
        url: "http://localhost:4000/verify-email",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/login");
    } catch (error) {}
  };

  //  try {

  // }
  //  } catch (error) {
  //   res.json({
  //     error:error.message
  //   })
  //  }}

  useEffect(() => {
    emailVerify();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-10 px-5 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Your Email has been verified
        </h1>
      </div>
    </div>
  );
};

export default VerifyEmail;
