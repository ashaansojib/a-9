import React from 'react';
import { Link } from 'react-router-dom';

const JobsItem = ({ job }) => {
    const { id, logo, company_name, job_title, job_type, location, salary } = job;
    return (
        <div>
            <div className="card card-compact border shadow-xl">
                <figure><img className='h-52 w-52 m-10' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className='text-xl'>{company_name}</p>
                    <button className="btn btn-outline btn-success w-40">{job_type}</button>
                    <div className='flex items-center'>
                        <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                            {location}</p>
                        <p>$ {salary}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/jobdetails/${id}`} className="my-btn">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsItem;