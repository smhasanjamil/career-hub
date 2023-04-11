import React, { useEffect, useState } from 'react';
import './JobCategory.css';
import Category from '../Category/Category';


const JobCategory = () => {
    const [jobCategory, setJobCategory] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])
    return (
        <div>
            <div className='my-20 text-center'>
                <h1 className='font-bold text-3xl mt-10 mb-5'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10'>
                {
                    jobCategory.map(category => <Category category={category} key={category.id}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;