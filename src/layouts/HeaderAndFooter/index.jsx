import React from 'react'
import { Footer, Header } from '../components'

export function HeaderAndFooter({ children }) {
    return (
        <div className="wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    )
}