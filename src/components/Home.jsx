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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio officiis id pariatur repudiandae aspernatur, sit voluptate illum? Cum, temporibus.</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio officiis id pariatur repudiandae aspernatur, sit voluptate illum? Cum, temporibus.</p>
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