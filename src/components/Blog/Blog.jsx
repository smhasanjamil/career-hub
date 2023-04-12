import React from 'react';

const Blog = () => {
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>


            

                <div className="card w-full bg-base-100 shadow-md mb-5">
                    <div className="card-body">
                        <h2 className="card-title">When should you use the Context API?</h2>
                        <p>The Context API should be used when you need to share data or state between components in React applications without passing props down multiple levels.</p>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-md mb-5">
                    <div className="card-body">
                        <h2 className="card-title">What is a custom hook?</h2>
                        <p>A custom hook is a reusable function in React that extracts common logic from components to improve code reusability and maintainability.</p>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-md mb-5">
                    <div className="card-body">
                        <h2 className="card-title">What is useRef?</h2>
                        <p>useRef is a React hook that creates a mutable reference to a DOM element or any other value, enabling developers to persist data across renders without triggering re-renders.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-md mb-5">
                    <div className="card-body">
                        <h2 className="card-title">What is useMemo?</h2>
                        <p>useMemo is a hook used in React functional components that returns a memoized value. It only runs when one of its dependencies updates which can improve performance.</p>
                    </div>

                </div>
            


        </div>
    );
};

export default Blog;