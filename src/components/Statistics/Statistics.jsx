import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignments = [
        {
            id: 1,
            assignmentName: "Assignment-1",
            marks: 60
        },
        {
            id: 2,
            assignmentName: "Assignment-2",
            marks: 59
        },
        {
            id: 3,
            assignmentName: "Assignment-3",
            marks: 60
        },
        {
            id: 4,
            assignmentName: "Assignment-4",
            marks: 60
        },
        {
            id: 5,
            assignmentName: "Assignment-5",
            marks: 60
        },
        {
            id: 6,
            assignmentName: "Assignment-6",
            marks: 55
        },
        {
            id: 7,
            assignmentName: "Assignment-7",
            marks: 60
        },
        {
            id: 8,
            assignmentName: "Assignment-8",
            marks: 60
        }
    ];

    return (
        <div className='my-10'>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    data={assignments}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="assignmentName" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>


        </div>
    );
};

export default Statistics;