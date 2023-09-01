import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
const Home = lazy(() => import("./pages/index"));
const About = lazy(() => import("./pages/about"));
const Blogs = lazy(()=> import("./pages/blogs"));
const SignUp = lazy(()=> import("./pages/signup").then(module=>{
	return { default: module.SignUp }
	})
);
const Contact = lazy(()=> wait(1000).then(() => import("./pages/contact")));



function App() {
	return (
		<Router>
			<Navbar />
			
		<Suspense fallback={<h1>Loading...</h1>}>
			<Routes>
				<Route path='/index' element={<Home/>}/>
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Suspense>
		</Router>
		
	);
}
function wait(time){
	return new Promise(resolve =>{
		setTimeout(resolve,time)
	});
};

export default App;
