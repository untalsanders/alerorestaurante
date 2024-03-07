'use strict'

import App from '@/App'
import { AboutPage, ContactPage, ErrorPage, HomePage, LocationsPage, MenusPage } from '@pages'
import { createBrowserRouter } from 'react-router-dom'

const { VITE_APP_URL } = import.meta.env

export const router = createBrowserRouter([
    {
        path: VITE_APP_URL,
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
