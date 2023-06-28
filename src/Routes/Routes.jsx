import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Header from "../Components/Header/Header";
import Blog from "../Pages/Blog/Blog";
import FullBlog from "../Pages/Blog/FullBlog";

const WebRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<FullBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { WebRoutes };
