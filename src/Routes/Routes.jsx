import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Header from "../Components/Header/Header";
import Blog from "../Pages/Blog/Blog";
import FullBlog from "../Pages/Blog/FullBlog";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Market from "../Pages/Market Place/Market";
import About from "../Pages/About/About";
import MarketAdd from "../Pages/Market Place/Add/MarketAdd";
import NewPage from "../Pages/Market Place/Add/NewPage";
import Admin from "../Pages/Admin/Admin";
import { AddProduct } from "../Pages/Admin/AddProduct";

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
          <Route path="/addmarket" element={<MarketAdd />} />
          <Route path="/about" element={<About />} />
          <Route path="/newpage" element={<NewPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { WebRoutes };
