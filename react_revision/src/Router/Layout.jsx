import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";
import Main from "./Main";
import NotFound from "./NotFound";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
       

      <ul className="App">
        <li style={{listStyle:"none"}}>
          <Link to="/">Main</Link>
          <Link to="/home">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/"></Link>
        </li>
      </ul>

      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default Layout;
