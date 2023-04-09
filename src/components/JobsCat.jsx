import React from 'react';

const JobsCat = ({ category }) => {
    return (
        <div className='p-4 rounded-md bg-slate-100'>
            <img className='w-full h-40' src={category.logo} alt="" />
            <div className='py-2 text-center'>
                <h1 className=' font-bold text-xl'>{category.title}</h1>
                <p className=''>{category.jobs}</p>
            </div>
        </div>
    );
};

export default JobsCat;