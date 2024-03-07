'use strict'

import App from '@/App'
import { AboutPage, ContactPage, ErrorPage, LandingPage, LocationsPage, MenusPage } from '@pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'menus',
                element: <MenusPage />,
            },
            {
                path: 'locations',
                element: <LocationsPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
        ],
    },
])
