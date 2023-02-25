import React from 'react';

export default function SingleSkills(props: {
	title: String;
	skills: String[];
}) {
	return (
		<div>
			<h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
				{props.title}
			</h5>
			<ul
				role='list'
				className='space-y-5 my-7'
			>
				{props.skills.map((skill) => {
					return (
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
								{skill}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
