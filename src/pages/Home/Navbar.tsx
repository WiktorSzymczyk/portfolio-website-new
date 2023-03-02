import React from 'react';

export default function Navbar() {
	return (
		<div className='grid grid-cols-2 py-5 h-full w-full items-center'>
			<div className='text-start px-[20%] z-10'>
				<h1 className='text-3xl font-semibold text-[#FCFFE7]'>Wiktor</h1>
				<h1 className='text-3xl font-bold text-[#EB455F]'>Szymczyk</h1>
			</div>
			<div className=''>
				<button className='border-2 border-[#EB455F] px-5 py-2 rounded-md text-[#fff] font-semibold hover:bg-[#EB455F] transition duration-500 ease-in-out'>
					Work with me!
				</button>
			</div>
		</div>
	);
}
