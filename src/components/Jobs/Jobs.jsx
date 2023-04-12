import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';
import JobDetails from '../JobDetails/JobDetails';
import { useLoaderData } from 'react-router-dom';
import './Jobs.css'

const Jobs = ({ jobs }) => {
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(true);
    }
    // const [jobs, setJobs] = useState([]);
    // useEffect(() => {
    //     fetch('jobs.json')
    //         .then(res => res.json())
    //         .then(data => setJobs(data))
    // }, []);

    // console.log(jobs)


    const jobDetailsHandler = (jobs) => {
        // console.log(jobs);
        // <JobDetails></JobDetails>
    }

    const allJobs = useLoaderData();
    // console.log(allJobs);

    return (
        <div>
            <div className='my-20 text-center'>
                <h1 className='font-bold text-3xl mt-10 mb-5'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    jobs.slice(0, showAll ? 10 : 4).map(job => <SingleJob job={job} key={job.id} jobDetailsHandler={jobDetailsHandler}></SingleJob>)
                }
            </div>
            <div className='text-center my-10'>
                {!showAll && (<button onClick={handleShowAll} className="btn btn-primary see-all-btn">See All Jobs</button>)}
            </div>
        </div>
    );
};

export default Jobs;