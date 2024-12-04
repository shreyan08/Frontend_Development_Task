import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import Project from "./pages/Project";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/newsletter" element={<Newsletter/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
