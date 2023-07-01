import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Header from "../Components/Header/Header";
import Blog from "../Pages/Blog/Blog";
import FullBlog from "../Pages/Blog/FullBlog";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Market from "../Pages/Market Place/Market";

const WebRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<FullBlog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { WebRoutes };
