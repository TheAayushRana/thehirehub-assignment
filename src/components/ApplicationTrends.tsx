'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', applications: 100 },
  { month: 'Feb', applications: 200 },
  { month: 'Mar', applications: 150 },
  { month: 'Apr', applications: 250 },
  { month: 'May', applications: 300 },
  { month: 'Jun', applications: 200 },
  { month: 'Jul', applications: 150 },
  { month: 'Aug', applications: 50 },
];

const ApplicationTrends = () => {
  return (
    <div className='flex flex-col gap-4 p-5'>
      <h2 className='text-lg uppercase font-normal'>Application Tracker Chart </h2>
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='applications'
              name='Applications'
              stroke='#0A396D'
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ApplicationTrends;
