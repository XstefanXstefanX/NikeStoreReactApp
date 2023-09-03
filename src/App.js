import React, { lazy, Suspense } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/index"));
const About = lazy(() => import("./pages/about"));
const Blogs = lazy(() => import("./pages/blogs"));
const SignUp = lazy(() =>
  import("./pages/signup").then((module) => {
    return { default: module.SignUp };
  })
);
const Contact = lazy(() => import("./pages/contact"));

function App() {
  return (
    <Router>
      <div className="router-container">
        <Sidebar />
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/index" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
export default App;
