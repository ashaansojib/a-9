import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedCart from './AppliedCart';

const AppliedJob = () => {
    const singleJob = useLoaderData();
    singleJob.map( job => console.log(job))
    return (
        <>
            {
                singleJob.map( job => <AppliedCart key={job.id} job={job}></AppliedCart>)
            }
        </>
    );
};

export default AppliedJob;