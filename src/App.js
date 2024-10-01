import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllBlogs from "./pages/blog/AllBlogs";
import SingleBlog from "./pages/blog/SingleBlog";
import CreateBlog from "./pages/blog/CreateBlog";
import EditBlog from "./pages/blog/EditBlog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import { Provider } from "react-redux";
import store from "./store/store";
import VerifyEmail from "./pages/auth/form/VerifyEmail";
import MyProfile from "./pages/auth/form/MyProfile";
import { Logout } from "./pages/auth/Logout";
import UpdateProfile from "./pages/auth/form/UpdateProfile";
import UpdatePassword from "./pages/auth/form/UpdatePassword";
import ForgotPassword from "./pages/auth/form/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/form/ResetPassword.jsx";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllBlogs></AllBlogs>} />
          <Route path="/:id" element={<SingleBlog></SingleBlog>} />
          <Route path="/create-blog" element={<CreateBlog></CreateBlog>} />
          <Route path="/edit-blog/:id" element={<EditBlog></EditBlog>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/logout" element={<Logout></Logout>} />
          <Route path="/my-profile" element={<MyProfile></MyProfile>} />
          <Route
            path="/update-profile"
            element={<UpdateProfile></UpdateProfile>}
          />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/verify-email" element={<VerifyEmail></VerifyEmail>} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
