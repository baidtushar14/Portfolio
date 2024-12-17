'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Project", path: "#project" },
    { title: "Contact", path: "#contact" },
];

export default function Navbar() {
    const [NavBarOpen, setNavBarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-85 px-8'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-8 py-3'>
                <Link href={"/"} className='text-lg md:text-4xl text-white font-semibold '>PORTFOLIO</Link>
            </div>
            <div className='flex flex-col'>
                <div className='mobile-menu flex flex-row sm:hidden fixed top-3 right-10'>
                    {!NavBarOpen ? (
                        <button onClick={() => setNavBarOpen(true)} className='text-slate-200 flex items-center justify-between border rounded border-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='w-5 h-5' />
                        </button>
                    ) : (
                        <button onClick={() => setNavBarOpen(false)} className='text-slate-200 flex items-center justify-between border rounded border-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='w-5 h-5' />
                        </button>
                    )}
                </div>
                <div className={`menu ${NavBarOpen ? 'block' : 'hidden'} sm:flex md:flex md:w-auto`} id='navbar'>
                    <ul className={`flex ${NavBarOpen ? 'flex flex-col py-4 gap-y-4 items-center text-2xl ' : 'fixed top-3 right-10'}`}>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} className='py-2 px-6 text-[#ADB7BE] sm:text-xl rounded hover:text-white hover:border-b hover:rounded-full hover:border-b-purple-500'>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}