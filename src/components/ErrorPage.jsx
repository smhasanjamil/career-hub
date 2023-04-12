import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    // <div className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
    //   <section className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>

    //     <div className='flex flex-col gap-5'>
    //       <div className='font-bold text-5xl'>
    //         <h1 className='text-center'>Oops!</h1>
    //         <h1>404 Page Not Found</h1>
    //       </div>
    //       <div className='text-cenetr'>
    //         <Link to='/' className='rounded p-2 font-semibold bg-cyan-200 text-gray-900 text-3xl text-center'
    //         >Back to homepage</Link>
    //       </div>
    //     </div>

    //   </section>
    // </div>
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center gap-5'>
        <div><h1 className='text-5xl font-extrabold text-slate-600'>Oops!</h1></div>
        <div><h1 className='text-2xl font-bold text-slate-600'>404 Page Not Found</h1></div>
        <div><Link to='/' className='text-3xl text-center bg-rose-700 text-white p-2 rounded-md font-bold'>Back to Home</Link></div>
      </div>
    </div>
  );
};

export default ErrorPage;