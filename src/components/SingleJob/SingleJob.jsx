import React from 'react';
import './SingleJob.css'
import { Link } from 'react-router-dom';

const SingleJob = ({ job, jobDetailsHandler }) => {
    const { id, companyLogo, companyName, jobTitle, jobType, location, salaryRange } = job;
    // console.log(job)
    return (
        <div>

            <div className="card w-full bg-base-100 shadow-lg">
                <figure className="px-10 pt-10 justify-start">
                    <img src={companyLogo} alt="Company Logo" className="rounded-xl h-20 w-20" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{jobTitle}</h2>
                    <p className='font-semibold my-2 text-slate-500'>{companyName}</p>
                    <div className='flex gap-3'>
                        <div className='job-type font-semibold'>{jobType[0]}</div>
                        <div className='job-type font-semibold'>{jobType[1]}</div>
                    </div>
                    <div className='flex gap-2 md:gap-8 flex-col md:flex-row'>
                        <div className='flex gap-2 items-center md:my-2'>
                            <img src="https://i.ibb.co/m9JgsmX/location.png" alt="location" className='h-5 w-5' />
                            <p className='text-slate-500'>{location}</p>
                        </div>
                        <div className='flex gap-2 items-center md:my-2'>
                            <img src="https://i.ibb.co/cQ43yHg/dollar.png" alt="location" className='h-5 w-5' />
                            <p className='text-slate-500'>Salary: {salaryRange}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary single-job-btn"><Link to={`/job-details/${id}`} >View Details</Link></button> 

                        {/* <button onClick={()=>jobDetailsHandler(job)} className="btn btn-primary">View Details</button> */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleJob;