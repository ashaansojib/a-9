import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='lg:flex justify-between p-2'>
            <h2 className='font-bold text-2xl'>Jobs Hunter</h2>
            <ul>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/static">Statistic</NavLink>
                <button className='my-btn'>Apply Circular</button>
            </ul>
        </div>
    );
};

export default Nav;