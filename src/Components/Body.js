import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Services from './Services';

const Body = () => {
    const appRouter = createBrowserRouter([
        {

            path: '/',
            element: <Home />,
        },
        {
            path: '/contact-us',
            element: <ContactUs />,
        },
        {
            path: '/about-us',
            element: <AboutUs />,
        },
        {
            path: '/services',
            element: <Services />,
        },
    ]);

    return (
        <div className='bg-gradient-to-b from-black via-1B1B1B via-2A2A2A via-333333 via-343434 via-3E3E3E to-black-595959 w-full h-full text-white'>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body