import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { MdShare } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import "./blog.css";
import { BlogData } from "../../Data/BlogData";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="blog-container">
      <Header />
      <div className="blog-body">
        <div className="blog-header">
          <h1>GREEN WASTE MANAGMENT BLOG POSTS</h1>
        </div>
        {BlogData.map((data) => {
          return (
            <div className="blog-posts" key={data.id}>
              <div className="blog-post-card">
                <div className="blog-body-top">
                  <Link to={`/blog/${data.id}`}>
                    <h1>{data.heading}</h1>
                  </Link>
                  <MdShare id="share-icon" />
                </div>
                <small style={{ color: "blue" }}>{data.date}</small>
                <div className="blog-card-body">
                  <div className="blog-p">
                    <p>{data.blogText}</p>
                  </div>
                  <div className="blog-card-bottom">
                    <div>
                      <RiMessage2Fill size={30} color="grey" />{" "}
                      <span>Post a Comment</span>
                    </div>
                    <Link to={`/blog/${data.id}`}>
                      <div>
                        <span>READ MORE</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
