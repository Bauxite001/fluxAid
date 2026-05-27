// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
// import Daily from "./pages/Daily";
import Programs from "./pages/Programs";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Gallery from "./pages/Gallery";
import Award from "./pages/Award";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
// import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/daily" element={<Daily />} /> */}
          <Route path="/programs" element={<Programs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/award" element={<Award />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/privacy" element={<Privacy />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
