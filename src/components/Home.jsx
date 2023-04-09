import React, { useEffect, useState } from 'react';
import Header from './Header';
import JobsCat from './JobsCat';

const Home = () => {
    // category data fetch
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <section className='lg:grid grid-cols-4 gap-4 py-4'>
                {
                    categories.map(category => <JobsCat category={category} key={category.id}></JobsCat>)
                }
            </section>
        </div>
    );
};

export default Home;