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
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body