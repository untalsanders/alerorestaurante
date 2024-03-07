'use strict'

import { router } from '@/routes/root'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './main.css'

const root = createRoot(document.querySelector('#root'))
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
