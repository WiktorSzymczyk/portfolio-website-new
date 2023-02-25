import React from 'react';
import me from '../../img/me.jpg';
import linkedin from '../../img/icons8-linkedin-480.png';
import mail from '../../img/icons8-mail-480.png';
import github from '../../img/icons8-github-480.png';

interface Location {
	assign(url: string | URL): void;
}

export default function Hero() {
	return (
		<div className='grid grid-cols-2 content-center w-full h-full'>
			<div className='grid place-items-center '>
				<img
					src={me}
					alt=''
					className='flex justify-center items-center rounded-full w-[35rem] h-[35rem] hover:rotate-[360deg] transition duration-1000 ease-out'
				/>
			</div>
			<div>
				<h1 className='w-[70%] text-start text-5xl text-[#FCFFE7] font-semibold pb-48 mt-20'>
					Hi! I'm <strong>Wiktor Szymczyk</strong> and this is my portfolio.
					<p className='opacity-30 pt-1'>FULL-STACK WEB DEVELOPER</p>
					<hr className='w-full mt-5 border-2 border-[#EB455F]'></hr>
					<div className='flex flex-row h-[10%] w-[10%] pt-3'>
						<img
							src={linkedin}
							alt='LinkedIn'
							onClick={() =>
								window.location.assign(
									'https://www.linkedin.com/in/wiktor-szymczyk-112161214/'
								)
							}
						/>
						<img
							src={mail}
							alt='Email'
							onClick={() =>
								window.location.assign('mailto: wiktor.szymczyk202@outlook.com')
							}
						/>
						<img
							src={github}
							alt='Github'
							onClick={() =>
								window.location.assign('http://github.com/WiktorSzymczyk')
							}
						/>
					</div>
					<div className='grid grid-cols-2 space-x-5 w-[50%] mt-3'>
						<button className='bg-[#EB455F] text-[#FCFFE7] hover:text-[#EB455F] transition duration-350 ease-out hover:bg-[#FCFFE7] text-base px-3 py-2 rounded-md'>
							Contact
						</button>
						<button className='bg-[#FCFFE7] text-[#EB455F] hover:bg-[#EB455F] hover:text-[#FCFFE7] transition duration-350 ease-out text-base px-3 py-2 rounded-md'>
							Download CV
						</button>
					</div>
					<div className='flex flex-col opacity-50 pt-10 space-y-2 animate-text bg-gradient-to-r from-[#2B3467] via-[#EB455F] to-[#FCFFE7] bg-clip-text text-transparent text-5xl font-black'>
						<h1>I write code,</h1>
						<h1>I copy code,</h1>
						<h1>I break the VSCode.</h1>
					</div>
				</h1>
			</div>
		</div>
	);
}
