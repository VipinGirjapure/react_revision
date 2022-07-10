import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import About from "./About";
import Home from "./Home";
import Products from "./Products";
const LazyAbout = React.lazy(() => import("./About")); //make sure that About component is a default export.
const NavBar = () => {
  return (
    <>
      <BrowserRouter>
        <ul className="navbar">
          <Link to="/ ">HOME</Link>
          <Link to="/about ">ABOUT</Link>
          <Link to="/products ">PRODUCTS</Link>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading please wait..">
                <LazyAbout />
              </React.Suspense>
            }
          />

          <Route path="/products" element={<Products />} />
          <Route path="/*" element={<h2>Page not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default NavBar;
