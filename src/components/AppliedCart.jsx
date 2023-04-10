import React from 'react';
import { Link } from 'react-router-dom';

const AppliedCart = ({job}) => {
    const { id, company_name, job_type, logo, job_title, location, salary, schedule} = job;
    return (
        <div className='p-4 mb-4 lg:grid grid-cols-4 border items-center'>
            <div>
                <img className='w-28 h-28' src={logo} alt="" />
            </div>
            <div className='col-span-2'>
                <h2 className='font-semibold text-2xl'>{job_title}</h2>
                <p>{company_name}</p>
                <button className="btn btn-sm bg-green-200 btn-outline btn-primary mr-2 mt-4">{job_type}</button>
                <button className="btn btn-sm bg-green-200 btn-outline btn-primary  mt-4">{schedule}</button>
                <div className='flex items-center justify-between py-2'>
                        <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                            {location}</p>
                        <p>$ {salary}</p>
                    </div>
            </div>
            <div className='flex justify-end'>
                <Link to={`/jobdetails/${id}`}><h2 className='my-btn bg-green-200 btn-outline '>View Detail</h2></Link>
            </div>
        </div>
    );
};

export default AppliedCart;