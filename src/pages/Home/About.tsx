import React from 'react';
import collage from '../../img/collage.png';

export default function About() {
	return (
		<div className='bg-[#fffff9] pt-28 flex flex-col px-[11%]'>
			<div className='grid grid-cols-2'>
				<div>
					<h1 className='text-3xl font-semibold text-[#2B3467] text-start'>
						About Me
					</h1>
					<p className='text-start w-[85%] h-[50%]'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
						minima recusandae accusantium culpa nesciunt ex praesentium dolorum
						illum id eos blanditiis aspernatur sint temporibus necessitatibus,
						fugiat nam consequatur ducimus. Pariatur. Lorem, ipsum dolor sit
						amet consectetur adipisicing elit. Ipsam minima recusandae
						accusantium culpa nesciunt ex praesentium dolorum illum id eos
						blanditiis aspernatur sint temporibus necessitatibus, fugiat nam
						consequatur ducimus. Pariatur. <br />
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
						minima recusandae accusantium culpa nesciunt ex praesentium dolorum
						illum id eos blanditiis aspernatur sint temporibus necessitatibus,
						fugiat nam consequatur ducimus. Pariatur.
					</p>
				</div>
				<img
					src={collage}
					alt=''
					className='object-contain w-auto h-[80%] pl-5 scale-1.2 hover:scale-[1.4] hover:translate-x-10 transition ease-in-out duration-350'
				/>
			</div>
		</div>
	);
}
