import React from 'react';
import './Home.css';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData();
    // console.log(jobs);

    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="../../../utilities/All Images/hero_image.png" className="max-w-sm rounded-lg"/>
                    <div>
                        <h1 className="text-5xl font-bold">BOne Step Closer To Your Dream Job</h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 grid content-center">
                    <h1 className="font-bold text-5xl lg:text-7xl">One Step <br />Closer To Your <br />Dream Job</h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <img src="../../../utilities/All Images/hero_image.png" />
                </div>
            </div>

            <JobCategory />
            <Jobs jobs={jobs} />

        </div>
    );
};

export default Home;