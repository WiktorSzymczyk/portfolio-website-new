import React from 'react';
import './App.css';
import Hero from './pages/Home/Hero';
import About from './pages/Home/About';
import Skills from './pages/Home/Skills';

function App() {
	return (
		<div className='App bg-[#2B3467]'>
			<Hero />
			<About />
			<Skills />
		</div>
	);
}

export default App;
