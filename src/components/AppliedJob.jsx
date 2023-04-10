import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedCart from './AppliedCart';

const AppliedJob = () => {
    const singleJob = useLoaderData();
    const [filteredData, setFilteredData] = useState(null);

    const remoteFilterData = () =>{
        const data = singleJob.filter( remote=> remote.job_type === 'Remote');
        setFilteredData(data);
    }
    const onsideFilterData = () =>{
        const data = singleJob.filter( onside=> onside.job_type === 'Onside');
        setFilteredData(data);
    }
    const clearFilterData = () =>{
        setFilteredData(null);
    }
    const dataToShow = filteredData || singleJob;

    return (
        <div className='lg:w-[850px] mx-auto py-10'>
            <div className='text-right'>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={remoteFilterData}>Remote Job</a></li>
                        <li><a onClick={onsideFilterData}>Onside job</a></li>
                        <li><a onClick={clearFilterData}>Clear Filter</a></li>
                    </ul>
                </div>
            </div>
            {
                dataToShow?.map(job => <AppliedCart key={job.id} job={job}></AppliedCart>)
            }
        </div>
    );
};

export default AppliedJob;
