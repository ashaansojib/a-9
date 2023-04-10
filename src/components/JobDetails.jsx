import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const details = useLoaderData();
    const {company_name, experience, job_info, job_res, job_title, location, requirements, salary, email, phone} = details;
    return (
        <div className='lg:grid grid-cols-3 p-4 relative'>
            <div className='col-span-2 pr-4 space-y-4'>
                <p><span className='font-semibold'>Job Desceiption: </span>{job_info}</p>
                <p><span className='font-semibold'>Job Responsiblity: </span>{job_res}</p>
                <p className='font-semibold'>Educational Requirments:</p>
                <p>{requirements}</p>
                <p className='font-semibold'>Experiences: </p>
                <p>{experience}</p>
            </div>
            <aside className='p-4 rounded-sm bg-slate-100 absolute right-0 top-9'>
                <div className='space-y-2'>
                    <h2 className='font-bold text-xl border-b-2 py-2'>Job Detals</h2>
                    <p><span className='font-semibold'>Job Title</span>: {job_title}</p>
                    <p><span className='font-semibold'>Company</span>: {company_name}</p>
                    <p><span className='font-semibold'>Salary</span>: {salary}</p>
                </div>
                <div className='space-y-2'>
                    <h2 className='font-bold text-xl border-b-2 py-2'>Contact Information</h2>
                    <p><span className='font-semibold'>Phone</span>: {phone}</p>
                    <p><span className='font-semibold'>Email</span>: {email}</p>
                    <p><span className='font-semibold'>Address</span>: {location}</p>
                </div>
            </aside>
        </div>
    );
};

export default JobDetails;