import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <h2>{details.company_name}</h2>
        </div>
    );
};

export default JobDetails;