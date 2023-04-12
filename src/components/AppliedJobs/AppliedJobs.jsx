import React from 'react';
import { getJobCart } from '../../utilities/FakeDb';
import { useLoaderData } from 'react-router-dom';
import AppliedItems from '../AppliedItems/AppliedItems';

const AppliedJobs = () => {
    const pData = useLoaderData();
    let cart = [];
    const savedCart = getJobCart();
    for (const id in savedCart) {
        const foundProduct = pData.find(product => product.id === id)
        if (foundProduct) {
            cart.push(foundProduct)
        }
    }
    // console.log(cart)
    return (
        <div>
            <div className='h-40 text-center text-3xl font-bold my-5'><h1>Applied Jobs</h1></div>

            {
                cart.map(job=> <AppliedItems job={job} key={job.id}></AppliedItems>)
            }


        </div>
    );
};

export default AppliedJobs;