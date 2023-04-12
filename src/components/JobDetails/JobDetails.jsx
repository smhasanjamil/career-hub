import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {

    const { jobDetails } = useParams();
    // console.log(jobDetails);

    const [apiData, setApiData] = useState([]);
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setApiData(data))
    }, [])


    useEffect(() => {
        if (apiData.length > 0) {
            const filteredJobData = apiData.filter(job => job.id === jobDetails);
            if (filteredJobData.length > 0) {
                setJobData(filteredJobData[0]);
            }
        }
    }, [apiData, jobDetails]);


    console.log(jobData);
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='h-40 text-center text-3xl font-bold my-5'><h1>Job Details</h1></div>

            <div className='grid grid-cols-12  gap-4'>

                <div className='flex flex-col gap-5 col-span-12 md:col-span-6'>
                    <p><span className='font-bold'>Job Description: </span>{jobData.jobDescription}</p>
                    <p><span className='font-bold'>Job Responsibility: </span>{jobData.jobResponsibility}</p>
                    <p><span className='font-bold'>Educational Requirements: </span> <br /> <span className='text-slate-600'>{jobData.degree}</span></p>
                    <p><span className='font-bold'>Experiences:: </span> <br /> <span className='text-slate-600'>{jobData.experience}</span></p>
                </div>

                <div className='col-span-12 md:col-span-6'>
                    <div className="card w-full bg-base-100 shadow-xl bg-slate-200">
                        <div className="card-body">
                            <h2 className="card-title ">Job Details</h2>
                            <hr className='border-slate-300' />

                            <div className='flex gap-2'>
                                <img src="https://i.ibb.co/gMyJh0M/Frame.png" alt="" />
                                <p><span className='font-bold'>Salary: </span>{jobData.salaryRange} (Per Month)</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src="https://i.ibb.co/hCVZJKb/Frame-1.png" alt="" />
                                <p><span className='font-bold'>Job Title: </span>{jobData.jobTitle}</p>
                            </div>

                            <h2 className="card-title mt-2">Contact Information</h2>
                            <hr className='border-slate-300' />

                            <div className='flex gap-2'>
                                <img src="https://i.ibb.co/897QRVc/Frame-2.png" alt="" />
                                <p><span className='font-bold'>Phone: </span>{jobData.phone}</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src="https://i.ibb.co/88YvXk8/Frame-3.png" alt="" />
                                <p><span className='font-bold'>Email: </span>{jobData.email}</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src="https://i.ibb.co/7YMvmwR/Frame-4.png" alt="" />
                                <p><span className='font-bold'>Address: </span>{jobData.fullAddress}</p>
                            </div>

                        </div>
                    </div>
                    <div className="card-actions my-10">
                        <button className="btn btn-primary btn-md sm:btn-md md:btn-lg lg:btn-lg w-full">Responsive</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;