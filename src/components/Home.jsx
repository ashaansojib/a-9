import React, { useEffect, useState } from 'react';
import Header from './Header';
import JobsCat from './JobsCat';
import JobsItem from './JobsItem';


const Home = () => {
    // category data fetch
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    // jobs item data fetcing
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('job_data.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    // add to local storage

    return (
        <div>
            <Header></Header>
            <section className='py-4'>
                <div className='text-center pb-4'>
                    <h2 className='text-4xl font-bold'>Available Job Category List</h2>
                    <p className='lg:w-[700px] mx-auto'>I am writing to express my interest in the available job at your organization. I am a highly motivated and skilled individual with a passion for field/industry. With number of years of experience in relevant skills/industry, I am confident in my ability to excel in this role. I am eager to bring my skills and expertise to your team and contribute to the success of your organization. Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.</p>
                </div>
                <div className='lg:grid grid-cols-4 gap-4 '>
                    {
                        categories.map(category => <JobsCat
                            category={category}
                            key={category.id}
                        ></JobsCat>)
                    }
                </div>
            </section>
            {/* featured job section */}
            <section className='py-4'>
                <div className='text-center pb-4'>
                    <h2 className='text-4xl font-bold'>Select and Choose Your Jobs</h2>
                    <p className='lg:w-[700px] mx-auto'>I am excited to accept the job offer at [company name]. After careful consideration of the role and the company's values, I believe that this is the perfect opportunity for me to further my career and make meaningful contributions to the organization. I am eager to work with the talented team members and grow both personally and professionally. Thank you for the opportunity, and I am looking forward to joining the team.</p>
                </div>
                <div className='lg:w-[900px] mx-auto lg:grid grid-cols-2 gap-5 justify-around'>
                    {
                        jobs.map(job => <JobsItem
                            key={job.id}
                            job={job}
                        ></JobsItem>)
                    }
                </div>
                <div className='text-center pt-4'>
                    <button className='my-btn'>Show All</button>
                </div>
            </section>
        </div>
    );
};

export default Home;