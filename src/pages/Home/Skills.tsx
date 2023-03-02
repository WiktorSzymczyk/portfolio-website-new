import React from 'react';
import SingleSkills from './SingleSkills';

export default function Skills() {
	const props = {
		card: [
			{
				id: 1,
				title: 'Frontend',
				skills: [
					'JavaScript',
					'TypeScript',
					'Tailwind',
					'HTML',
					'CSS',
					'Bootstrap',
				],
			},
			{
				id: 2,
				title: 'Backend',
				skills: ['NodeJS', 'Express', 'MongoDB', 'PostgreSQL'],
			},
			{
				id: 2,
				title: 'Methodologies',
				skills: [
					'Git',
					'Scrum',
					'Kanban',
					'UI/UX Design',
					'Pair Programming',
					'Project Management',
				],
			},
			{
				id: 2,
				title: 'Tools',
				skills: ['Adobe XD', 'Figma', 'Github', 'Google Analytics'],
			},
		],
	};

	return (
		<div className='bg-[#2B3467] px-[11%]'>
			{/* <div className='flex flex-col justify-center'> */}
			{/* <div className='flex flex-row'> */}
			{/* <div className='flex justify-center'>
					<h1 className='text-3xl pb-5 font-semibold text-[#FCFFE7] pt-5'>
						Skills
					</h1>
				</div>
				{props.card.map((card, index) => (
					<div className='grid grid-cols-4 gap-x-10'>
						<div
							key={card.id}
							className='w-full max-w-sm p-4 bg-white border-2 border-[#EB455F] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'
						>
							<SingleSkills
								title={card.title}
								skills={card.skills}
							/>
						</div>
					</div>
				))}
			</div> */}
			{/* </div> */}
			<div className='flex flex-col justify-center'>
				<div className=''>
					<div className='flex justify-center'>
						<h1 className='text-3xl pb-5 font-semibold text-[#FCFFE7] pt-5'>
							Skills
						</h1>
					</div>
					<div className='grid grid-cols-4 gap-x-10'>
						<div className='w-full max-w-sm p-4 bg-white border-2 border-[#EB455F] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
							<h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
								Frontend
							</h5>
							<ul
								role='list'
								className='space-y-5 my-7'
							>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										JavaScript
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Typescript
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Tailwind
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										HTML
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										CSS
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Bootstrap
									</span>
								</li>
							</ul>
						</div>
						<div className='w-full max-w-sm p-4 bg-white border-2 border-[#EB455F] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
							<h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
								Backend
							</h5>
							<ul
								role='list'
								className='space-y-5 my-7'
							>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										NodeJS
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										ExpressJS
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										MongoDB
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										PostgreSQL
									</span>
								</li>
							</ul>
						</div>
						<div className='w-full max-w-sm p-4 bg-white border-2 border-[#EB455F] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
							<h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
								Methodologies
							</h5>
							<ul
								role='list'
								className='space-y-5 my-7'
							>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Git
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Scrum
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Kanban
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										UI/UX Design
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Pair Programming
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Project Management
									</span>
								</li>
							</ul>
						</div>
						<div className='w-full max-w-sm p-4 bg-white border-2 border-[#EB455F] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
							<h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
								Tools
							</h5>
							<ul
								role='list'
								className='space-y-5 my-7'
							>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Adobe XD
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Figma
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Github
									</span>
								</li>
								<li className='flex space-x-3'>
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>Check icon</title>
										<path
											fill-rule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
										Google Analytics
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
