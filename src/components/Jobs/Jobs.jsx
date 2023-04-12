import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className='my-20 text-center'>
                <h1 className='font-bold text-3xl mt-10 mb-5'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    jobs.map(job => <SingleJob job={job} key={job.id}></SingleJob>)
                }
            </div>
            <div className='text-center my-10'>
                <button className="btn btn-primary">See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobs;