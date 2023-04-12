import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import JobCategory from './components/JobCategory/JobCategory';
import JobDetails from './components/JobDetails/JobDetails';
import Jobs from './components/Jobs/Jobs';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        // errorElement: <ErrorPage />,
        // errorElement: ,
        
        loader: () => fetch('/jobs.json'),
        
      },
    
      // {
      //   path: "/",
      //   element: <Jobs></Jobs>,
      //   loader: ()=> fetch('/jobs.json'),
      // },
      {
        path: "/job-details/:jobDetails",
        element: <JobDetails />,
        // loader: ({ params }) => console.log(params),
        loader: ({ params }) => fetch(`/jobs.json/${params.jobDetails}`),
        // loader: () => fetch('/jobs.json'),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch('/jobs.json'),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <RouterProvider router={router} />
  </>
)
