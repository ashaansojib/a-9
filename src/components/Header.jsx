import React from 'react';

const Header = () => {
    return (
        <div className='lg:grid grid-cols-2 justify-between items-center bg-slate-100 p-2 rounded-md'>
            <div className='space-y-2'>
                <h2 className='font-bold text-6xl'>One Step To Find Your <span className='text-sky-400'>Dream Jobs</span></h2>
                <p>I am excited to apply for the programming position at your esteemed organization. As a highly skilled programmer with experience in various programming languages and frameworks, I am confident that I have the necessary skills and expertise to excel in this role. I have always had a passion for programming,</p>
                <button className='my-btn'>Get Started</button>
            </div>
            <div className='lg:flex justify-end'>
                <img src="logo.png" alt="" />
            </div>
        </div>
    );
};

export default Header;