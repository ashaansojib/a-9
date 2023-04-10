import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedCart from './AppliedCart';

const AppliedJob = () => {
    const singleJob = useLoaderData();
    return (
        <div className='lg:w-[850px] mx-auto py-10'>
            <div className='text-right'>
                <button className='my-btn my-4'>Filter By</button>
            </div>
            {
                singleJob.map(job => <AppliedCart key={job.id} job={job}></AppliedCart>)
            }
        </div>
    );
};

export default AppliedJob;