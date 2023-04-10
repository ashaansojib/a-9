import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Static = () => {
    const data = useLoaderData()
    return (
        <div className='lg:w-[600px] mx-auto'>
            <AreaChart 
            width={500}
            height={300}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="marks" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Static;