import React from "react";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router";
import { BlogData } from "../../Data/BlogData";
import { MdShare } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiLeftArrowAlt, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RiMessage2Fill } from "react-icons/ri";
import Footer from "../../Components/Footer/Footer";

const FullBlog = () => {
  const { blogId } = useParams();
  //   console.log(blogId);
  const shuffledBlogs = () => {
    for (let i = BlogData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [BlogData[i], BlogData[j]] = [BlogData[j], BlogData[j]];
    }
    return BlogData;
  };
  const popularBlogs = shuffledBlogs();
  return (
    <div>
      <Header />
      <div className="full-blog-container blog-body">
        <div className="full-blog-header">
          <BiLeftArrowAlt id="fblog-icon" />
          <h1>GREEN WASTE MANAGEMENT</h1>
          <BiSearch id="fblog-icon" />
        </div>
        <div className="blog-posts full-blog-body">
          {BlogData.filter((data) => data.id == blogId).map((data) => {
            return (
              <div className="blog-post-card " key={data.id}>
                <div className="blog-body-top">
                  <h1>{data.heading}</h1>
                  <MdShare id="share-icon" />
                </div>
                <small style={{ color: "blue" }}>{data.date}</small>
                <div className="blog-card-body full-blog-post-card">
                  <div className="full-blog-p">
                    <p>{data.blogText}</p>
                  </div>
                  <div className="full-blog-card-bottom">
                    <FaUserCircle />
                    <input type="text" placeholder="Enter a comment" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="blog-posts popular-blogs">
          <div
            style={{ marginBottom: "1.5rem", color: "grey", fontWeight: "600" }}
          >
            <small>Popular posts from this blog</small>
          </div>
          {popularBlogs.map((data) => {
            return (
              <div className="blog-post-card" key={data.id}>
                <div className="blog-body-top">
                  <Link to={`/blog/${data.id}`}>
                    <h1>{data.heading}</h1>
                  </Link>
                  <MdShare id="share-icon" />
                </div>
                <small style={{ color: "green", fontStyle: "italic" }}>
                  {data.date}
                </small>
                <div className="blog-card-body">
                  <div className="blog-p full-blog-pr">
                    <p>{data.blogText}</p>
                  </div>
                  <div className="blog-card-bottom">
                    <div style={{ visibility: "hidden" }}>
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
            );
          })}
          <div className="popular-line"></div>
          {popularBlogs.map((data) => {
            return (
              <div className="blog-post-card" key={data.id}>
                <div className="blog-body-top">
                  <Link to={`/blog/${data.id}`}>
                    <h1>{data.heading}</h1>
                  </Link>
                  <MdShare id="share-icon" />
                </div>
                <small style={{ color: "green", fontStyle: "italic" }}>
                  {data.date}
                </small>
                <div className="blog-card-body">
                  <div className="blog-p full-blog-pr">
                    <p>{data.blogText}</p>
                  </div>
                  <div className="blog-card-bottom">
                    <div style={{ visibility: "hidden" }}>
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
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullBlog;
