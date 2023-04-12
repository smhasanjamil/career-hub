import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    // const [apiData, setApiData] = useState([]);
    // useEffect(()=>{
    //     fetch('jobs.json')
    //     .then(res=>res.json())
    //     .then(data=> console.log(data))
    // },[])
    const myJobs = useLoaderData();
    // const myJob = useParams();
    console.log(myJobs);

    // const [filteredData, setFilteredData] = useState(null); // State to store filtered data
    // const [id, setId] = useState(''); // State to store input ID

    // const filtered = apiData.filter(item => item.id === Number(id));
    // setFilteredData(filtered.length ? filtered[0] : null);


    return (
        <div>
            <h1>Job Details</h1>
        </div>
    );
};

export default JobDetails;