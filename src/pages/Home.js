import React from "react";
import "./Home.css";
import image from "./../assets/images/Image-1.svg";
import blog from "./../assets/images/Image-4.svg";
import blogtwo from "./../assets/images/Image-5.svg";
import blogthree from "./../assets/images/Image-6.svg";
import blogfour from "./../assets/images/Image-7.svg";
import blogfive from "./../assets/images/Image-8.svg";
import blogsix from "./../assets/images/Image-9.svg";
import blogseven from "./../assets/images/Image-2.svg";
import Blogeight from "./../assets/images/Image.svg";
import rightarow from "./../assets/images/arrow-up-right.png";
import blogeleven from "./../assets/images/Image-11.svg";
const Home = () => {
  return (
    <>
      <section className="the-blog-section">
        <div className="container">
          <h1 className="blog-heading">The Blog</h1>
        </div>
      </section>
      {/* recent-blog-section */}
      <section className="recent-blog-section">
        <div className="container">
          <h2 className="all-blog-post-heading">Recent Blog Post</h2>
          <div className="card-row">
            <div className="column-card-1">
              <img src={Blogeight} className="recent-blog-image"></img>
              <div className="ux-review-content">
                <h4 className="recent-blog-title">Olivia Rhye 1 Jan 2023</h4>
                <h2 className="recent-blog-title">
                  UX review presentations{" "}
                  <img src={rightarow} className="rect-blog-right-arrow"></img>
                </h2>
                <p className="recent-blog-description">
                  I low do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
                <div className="recent-blog-bottom-des">
                  <p className="leadership-text">Design</p>
                  <p className="management-text">Research</p>
                  <p className="skill-two-text">presentation</p>
                </div>
              </div>
            </div>
            <div className="column-card-1">
              <div className="row-one">
                <div className="col">
                  <img src={image} className="recent-blog-image"></img>
                </div>
                <div className="col">
                  <h4 className="recent-blog-title lana-text">
                    Lana Steiner 1 Jan 2023
                  </h4>
                  <h2 className="recent-blog-title">
                    Building your API Stack{" "}
                  </h2>
                  <p className="recent-blog-description">
                    The rise of RESTful APIs has been met by a rise in tools for
                    creating, testing, and manag...
                  </p>
                  <div className="recent-blog-bottom-des">
                    <p className="leadership-text">Design</p>
                    <p className="skill-two-text">Research</p>
                  </div>
                </div>
              </div>
              <div className="row-one secound-card">
                <div className="col">
                  <img src={blogseven} className="recent-blog-image-one"></img>
                </div>
                <div className="col">
                  <h4 className="recent-blog-title lana-text">
                    Lana Steiner 1 Jan 2023
                  </h4>
                  <h2 className="recent-blog-title">
                    Building your API Stack{" "}
                  </h2>
                  <p className="recent-blog-description">
                    The rise of RESTful APIs has been met by a rise in tools for
                    creating, testing, and manag...
                  </p>
                  <div className="recent-blog-bottom-des">
                    <p className="leadership-text">Design</p>
                    <p className="skill-two-text">Research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row recent-blog-row-third">
            <div className=" col-lg-6 col-md-12">
              <img src={blogeleven} className="blog-climate-image"></img>
            </div>
            <div className=" col-lg-6 col-md-12">
              <h4 className="recent-blog-title olivia-text">
                Olivia Rhye 1 Jan 2023
              </h4>
              <h2 className="recent-blog-title">
                Grid system for better design user interface{" "}
                <img src={rightarow} className="rect-blog-right-arrow"></img>
              </h2>
              <p className="recent-blog-description">
                Grid system for better Design User Interface A grid system is a
                design tool used to arrange content on a webpage. It is a series
                of vertical and horizontal lines that create a matrix of
                intersecting points, which can be used to align and organize
                page elements. Grid systems are used to create a consistent look
                and fool across a website, and can help to make the layout more
                visually appealing and casier to navigate.
              </p>
              <div className="recent-blog-bottom-des">
                <p className="leadership-text">Design</p>
                <p className="skill-two-text">Interface</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* recent-blog-section-ends */}

      {/* all-blog-section-start */}
      <section className="all-blogs-section">
        <div className="container">
          <h1 className="all-blog-post-heading">all blog post</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-post-cards">
                <img src={blog} className="all-blog-image"></img>
                <h4 className="all-blog-card-title">
                  Alec whitten .1 jan 2023
                </h4>

                <div className="all-blog-card-heading">
                  <h2 className="card-heading">
                    Bill Walsh leadership lessons
                  </h2>
                  <img src={rightarow} className="card-right-arrow"></img>
                </div>

                <p className="all-blog-card-description">
                  Like to know the secrets of transforming a 2-14 team into a 3x
                  Super Bowl winning Dynasty?
                </p>
                <div className="blog-card-skills">
                  <p className="leadership-text">Leadership</p>
                  <p className="management-text">Managment</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6">
              <div className="blog-post-cards">
                <img src={blogtwo} className="all-blog-image"></img>
                <h4 className="all-blog-card-title">
                  Demi Wilkinson .1 jan 2023
                </h4>
                <div className="all-blog-card-heading">
                  <h2 className="card-heading">PM mental models</h2>
                  <img src={rightarow} className="card-right-arrow"></img>
                </div>

                <p className="all-blog-card-description">
                  Mental models are simple expressions of complex processes or
                  relationships.
                </p>
                <div className="blog-card-skills">
                  <p className="leadership-text">Product</p>
                  <p className="management-text">Research</p>
                  <p className="skill-three">Framework</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6">
              <div className="blog-post-cards">
                <img src={blogthree} className="all-blog-image"></img>
                <h4 className="all-blog-card-title">Candice Wu .1 jan 2023</h4>
                <div className="all-blog-card-heading">
                  <h2 className="card-heading">What is Wireframing?</h2>
                  <img src={rightarow} className="card-right-arrow"></img>
                </div>

                <p className="all-blog-card-description">
                  Introduction to Wireframing and its Principles. Learn from the
                  best in the industry
                </p>
                <div className="blog-card-skills">
                  <p className="leadership-text">Design</p>
                  <p className="management-text">Research</p>
                </div>
              </div>
            </div>
          </div>
          {/* cards-row-secound */}
          <div className="row blog-card-secound-row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-post-cards">
                <img src={blogfour} className="all-blog-image"></img>
                <h4 className="all-blog-card-title">
                  Natali Craig .1 jan 2023
                </h4>
                <div className="all-blog-card-heading">
                  <h2 className="card-heading">
                    How collaboration makes us better designers
                  </h2>
                  <img src={rightarow} className="card-right-arrow"></img>
                </div>
                <p className="all-blog-card-description">
                  Collaboration can make our teams stronger, and our individual
                  designs better.
                </p>
                <div className="blog-card-skills">
                  <p className="leadership-text">Design</p>
                  <p className="management-text">Research</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-post-cards">
                <img src={blogfive} className="all-blog-image"></img>
                <h4 className="all-blog-card-title">Drew Cano.1 jan 2023</h4>
                <div className="all-blog-card-heading">
                  <h2 className="card-heading">
                    Our top 10 Javascript frameworks to use
                  </h2>
                  <img src={rightarow} className="card-right-arrow"></img>
                </div>
                <p className="all-blog-card-description">
                  JavaScript frameworks make development easy with extensive
                  features and functionalities.
                </p>
                <div className="blog-card-skills">
                  <p className="leadership-text">Software Development</p>
                  <p className="management-text">Tools</p>
                  <p className="skill-three">Sass</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-post-cards">
                <img src={blogsix} className="all-blog-image"></img>
                <h4 className="all-blog-card-title">
                  Alec whitten .1 jan 2023
                </h4>
                <div className="all-blog-card-heading">
                  <h2 className="card-heading">
                    Podcast: Creating a better CX Community
                  </h2>
                  <img src={rightarow} className="card-right-arrow"></img>
                </div>
                <p className="all-blog-card-description">
                  Starting a community doesn't need to be complicated, but how
                  do you get started?
                </p>
                <div className="blog-card-skills">
                  <p className="leadership-text">Leadership</p>
                  <p className="management-text">Managment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pagination */}
      <section className="pagination-section">
        <div className="container">
          <p className="pagination-border"></p>
          <div className="pagination-container">
            <button class="prev-btn">
              <i class="fa-solid fa-arrow-left btn-left-arrow"></i>Previous
            </button>
            <div class="pagination-numbers">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>....</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <button class="next-btn">
              Next<i class="fa-solid fa-arrow-right btn-right-arrow"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
