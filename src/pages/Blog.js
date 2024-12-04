import React from "react";
import "./Blog.css";
import Blogeight from "./../assets/images/Image.svg";
import blogeleven from "./../assets/images/Image-11.svg";
import blogtweleve  from "../assets/images/Image-12.svg";
import blogseven from "./../assets/images/Image-2.svg";
import image from "./../assets/images/Image-1.svg";
import rightarow from "./../assets/images/arrow-up-right.png";


const Blog = () => {
  return (
    <>
      <section className="recent-blog-post-cards-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 recent-blog-post-column">
              <h3>Recent blog Post</h3>
              <div className="recent-blog-post-card">
                <img
                  src={Blogeight}
                  className="recent-blog-post-card-image"
                ></img>
                <h2 className="recent-blog-card-title">Sunday, 1 Jan 2023</h2>
                <div className="recent-blog-card-heading">
                <h3 className="recent-blog-card-sub-title">UX review presentations</h3>
                <img src={rightarow} className="card-right-arrow"></img>
                </div>
                <p className="recent-blog-card-description">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
                <div className="recent-blog-post-card-bottom-text">
                  <p className="leadership-text">Design</p>
                  <p className="skill-three">Research</p>
                  <p className="skill-two-text">presentation</p>
                </div>
              </div>
              <div className="recent-blog-post-card">
                <img
                  src={image}
                  className="recent-blog-post-card-image"
                ></img>
                <h2 className="recent-blog-card-title">Sunday, 1 Jan 2023</h2>
                <h3 className="recent-blog-card-sub-title">UX review presentations</h3>
                <p className="recent-blog-card-description">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
                <div className="recent-blog-post-card-bottom-text">
                  <p className="leadership-text">Design</p>
                  <p className="skill-two-text">presentation</p>
                </div>
              </div>
              <div className="recent-blog-post-card">
                <img
                  src={blogseven}
                  className="recent-blog-post-card-image"
                ></img>
                <h2 className="recent-blog-card-title">Sunday, 1 Jan 2023</h2>
                <h3 className="recent-blog-card-sub-title">UX review presentations</h3>
                <p className="recent-blog-card-description">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
                <div className="recent-blog-post-card-bottom-text">
                  <p className="leadership-text">Design</p>
                  <p className="skill-two-text">presentation</p>
                </div>
              </div>
              
            </div>
            <div className="col-md-9 grid-system-column">
              <p className="day-text">Sunday,1 jan 2023</p>
              <h2 className="grid-system-section-heading">Grid system for better Design User Interfáce</h2>
              <img src={blogeleven} className="blog-page-climate-img"></img>
              <p className="grid-system-section-description">
                A grid system is a design tool used to arrange content on a
                webpage. It is a series of vertical and horizontal lines that
                create a matrix of intersecting points, which can be used to
                align and organize page elements. Grid systems are used to
                create a consistent look and feel across a website, and can help
                to make the layout more visually appealing and easier to
                navigate. If you've been to New York City and have walked the
                streets, it is easy to figure out how to get from one place to
                another because of the grid system that the city is built on.
                Just as the predictability of a city grid helps locals and
                tourists get around easily, so do webpage grids provide a
                structure that guides users and designers alike. Because of
                their consistent reference point, grids improve page readability
                and scannability and allow people to quickly get where they need
                to go.
              </p>
              <p className="grid-structure-section-heading">Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.</p>
              <img src={blogtweleve} className="grid-layout-image"></img>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
