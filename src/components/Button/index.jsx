// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export function Button({ content }) {
    return (
        <Link to='/' className='btn'>
            {content}
        </Link>
    )
}