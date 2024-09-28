import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center'>
                <Link to={'/'}>
                    <img src="/images/logo.png" className='w-16 sm:w-24' alt="logo" />
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-10' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </nav>
        </header>
    )
}

export default Header