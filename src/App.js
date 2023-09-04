import Loading from "./pages/pagesLoading";
import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => wait(2000).then(() => import("./pages/index")));
const About = lazy(() => wait(2000).then(() => import("./pages/about")));
const Blogs = lazy(() => wait(2000).then(() => import("./pages/blogs")));
const Contact = lazy(() => wait(2000).then(() => import("./pages/contact")));
const SignUp = lazy(() =>
  wait(2000).then(() =>
    import("./pages/signup").then((module) => {
      return { default: module.SignUp };
    })
  )
);

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
