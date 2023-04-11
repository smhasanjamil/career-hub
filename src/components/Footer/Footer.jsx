import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black'>


            <div className='px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                <footer className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 text-gray-400">
                    <div className='flex flex-col'>
                        <span className='text-3xl text-white font-bold'>WorkSeeker</span>
                        <p className='py-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img className='h-15 w-full pb-5' src="../../utilities/Icons/group_9969.png" alt="Social Icon" />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg text-white font-bold pb-2'>Company</span>
                        <a className="link link-hover pb-2">About Us</a>
                        <a className="link link-hover pb-2">Work</a>
                        <a className="link link-hover pb-2">Latest News</a>
                        <a className="link link-hover pb-2">Careers</a>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg text-white font-bold pb-2'>Product</span>
                        <a className="link link-hover pb-2">Prototype</a>
                        <a className="link link-hover pb-2">Plans & Pricing</a>
                        <a className="link link-hover pb-2">Customers</a>
                        <a className="link link-hover pb-2">Integrations</a>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg text-white font-bold pb-2'>Support</span>
                        <a className="link link-hover pb-2">Help Desk</a>
                        <a className="link link-hover pb-2">Sales</a>
                        <a className="link link-hover pb-2">Become a Partner</a>
                        <a className="link link-hover pb-2">PDevelopers</a>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg text-white font-bold pb-2'>Contact</span>
                        <a className="link link-hover pb-2">524 Broadway , NYC</a>
                        <a className="link link-hover pb-2">+1 777 - 978 - 5570</a>
                    </div>
                </footer>
                <hr className='border-slate-600' />

                <div className='flex md:justify-between flex-col md:flex-row text-gray-400 my-5'>
                    <div><p>@2023 CareerHub. All Rights Reserved</p></div>
                    <div><p>Powered by CareerHub</p></div>
                </div>

            </div>
        </div>
    );
};

export default Footer;