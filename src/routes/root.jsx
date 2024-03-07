'use strict'

import App from '@/App'
import { AboutPage, ContactPage, ErrorPage, HomePage, LocationsPage, MenusPage } from '@pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: __BASE_URL__,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
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
