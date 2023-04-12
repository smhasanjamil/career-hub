import React from 'react';
import './AppliedItems.css'

const AppliedItems = ({ job }) => {
    console.log(job)
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={job.companyLogo} alt="Album"  className='h-20 w-20'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{job.jobTitle}</h2>
                    <p>{job.companyName}</p>
                    <div className='flex gap-2'>
                        <div className='job-type'>{job.jobType[0]}</div>
                        <div className='job-type'>{job.jobType[0]}</div>
                    </div>
                    <div className='flex gap-2 items-center md:my-2'>
                            <img src="https://i.ibb.co/m9JgsmX/location.png" alt="location" className='h-5 w-5' />
                            <p className='text-slate-500'>{job.location}</p>
                        </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AppliedItems;