import React from 'react';

const Category = ({ category }) => {
    // console.log(category)
    return (
        <div>

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={category.image} alt="Category Image" className='h-10 w-10' />
                    <h2 className="card-title">{category.jobName}</h2>
                    <p>{category.totalJobsAvailable} Jobs Available</p>
                </div>
            </div>

        </div>
    );
};

export default Category;