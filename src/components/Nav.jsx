import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='lg:flex justify-between p-2  border-b-2'>
            <Link to="/"> <h2 className='font-bold text-2xl'>Jobs Hunter</h2></Link>
            <ul>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/static">Statistic</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/blog">Blogs</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/appliedjob">Applied Job</NavLink>
                <button className='my-btn'>Apply Circular</button>
            </ul>
        </div>
    );
};

export default Nav;