import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  localStorage.removeItem("token");
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);
  return <div>Admin Logout</div>;
};
