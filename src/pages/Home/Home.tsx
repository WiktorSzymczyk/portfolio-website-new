import React from 'react';
import './About.scss';

export default function Home() {
	return (
		<div>
			<h1 className='pt-10 font-semibold text-2xl text-white'>Skills</h1>
			<div className='container'>
				<div className='box'>
					<div className='imgBx'>
						<img
							src='https://content.altexsoft.com/media/2020/01/Front_end_featured.jpg'
							alt=''
						/>
					</div>
					<div className='content'>
						<div>
							<h2 className='font-bold'>Frontend</h2>
							<ul>
								<p>JavaScript</p>
								<p>Typescript</p>
								<p>Tailwind</p>
								<p>HTML</p>
								<p>CSS</p>
								<p>Bootstrap</p>
							</ul>
						</div>
					</div>
				</div>
				<div className='box'>
					<div className='imgBx'>
						<img
							src='https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2VuZHxlbnwwfHwwfHw%3D&w=1000&q=80'
							alt=''
						/>
					</div>
					<div className='content'>
						<div>
							<div>
								<h2 className='font-bold'>Backend</h2>
								<ul>
									<p>NodeJS</p>
									<p>ExpressJS</p>
									<p>MongoDB</p>
									<p>PostgreSQL</p>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='box'>
					<div className='imgBx'>
						<img
							src='https://www.aib.world/wp-content/uploads/2020/11/research-methods-covid-webinar-header.jpg'
							alt=''
						/>
					</div>
					<div className='content'>
						<div>
							<h2 className='font-bold'>Methodologies</h2>
							<ul>
								<p>Git</p>
								<p>Scrum</p>
								<p>Kanban</p>
								<p>UI/UX Design</p>
								<p>Pair Programming</p>
								<p>Project Management</p>
							</ul>
						</div>
					</div>
				</div>
				<div className='box'>
					<div className='imgBx'>
						<img
							src='https://wallpaperaccess.com/full/3569655.jpg'
							alt=''
						/>
					</div>
					<div className='content'>
						<div>
							<h2 className='font-bold'>Tools</h2>
							<ul>
								<p>Adobe XD</p>
								<p>Figma</p>
								<p>Github</p>
								<p>Google Analytics</p>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
