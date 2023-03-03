import React from 'react';
import './App.css';
import Hero from './pages/Home/Hero';
import About from './pages/Home/About';
// import Skills from './pages/Home/Skills';
import Home from './pages/Home/Home';
import Navbar from './pages/Home/Navbar';
// import Portfolio from './pages/Home/Portfolio';

function App() {
	return (
		<div className='App bg-[#2B3467] pb-20'>
			<Navbar />
			<Hero />
			<About />
			{/* <Skills /> */}
			<Home />
			{/* <Portfolio /> */}
		</div>
	);
}

export default App;
