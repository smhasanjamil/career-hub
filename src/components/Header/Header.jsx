import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='hover:bg-slate-200 hover:rounded-md p-2 ' to="/statistics">Statistics</Link>
                            <Link className='hover:bg-slate-200 hover:rounded-md p-2 ' to="/applied-jobs">Applied Jobs</Link>
                            <Link className='hover:bg-slate-200 hover:rounded-md p-2 ' to="/blog">Blog</Link>
                        </ul>
                    </div>
                    <Link className='btn btn-ghost normal-case text-xl ' to="/">WorkSeeker</Link>
                    {/* <a className="btn btn-ghost normal-case text-xl">WorkSeeker</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 ">
                        <Link className='hover:bg-slate-200 hover:rounded-md p-2 ' to="/statistics">Statistics</Link>
                        <Link className='hover:bg-slate-200 hover:rounded-md p-2 ' to="/applied-jobs">Applied Jobs</Link>
                        <Link className='hover:bg-slate-200 hover:rounded-md p-2 ' to="/blog">Blog</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                <Link className='btn header-btn' to="#">Star Applying</Link>
                    {/* <a className="btn">Star Applying</a> */}
                </div>
            </div>

        </div>
    );
};

export default Header;