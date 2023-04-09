import React from 'react';

const JobsCat = ({category}) => {
    return (
        <div className='p-4 rounded-md bg-slate-100'>
            <h1>{category.title}</h1>
        </div>
    );
};

export default JobsCat;