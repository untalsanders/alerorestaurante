'use strict'

import Footer from '@components/Footer'
import Header from '@components/Header'
import SubFooter from '@components/SubFooter'
import { Outlet } from 'react-router-dom'
import './App.css'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <SubFooter />
            <Footer />
        </>
    )
}
