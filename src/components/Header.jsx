import React from 'react';

const Header = () => {
    return (
        <div className='lg:grid grid-cols-2 justify-between items-center'>
            <div className='space-y-2'>
                <h2 className='font-bold text-6xl'>One Step To Find Your <span className='text-sky-400'>Dream Jobs</span></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quos laborum nemo eum id necessitatibus in velit magnam, modi consequatur laboriosam tenetur cupiditate esse amet voluptates excepturi odit, pariatur ullam.</p>
                <button className='my-btn'>Get Started</button>
            </div>
            <div  className='lg:flex justify-end'>
                <img src="logo.png" alt="" />
            </div>
        </div>
    );
};

export default Header;