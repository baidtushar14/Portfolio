/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState, useTransition } from 'react'
import AboutImage from '../../../public/images/HeroImage.png'
import Image from 'next/image'
import { TabButton } from './TabButton';

const Tab_data = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2 ml-2'>
                <li>Angular</li>
                <li>Next.js</li>
                <li>React</li>
                <li>Javascript</li>
                <li>Java</li>
                <li>Python</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2 ml-2'>
                <li>Bachelor from Chandigarh University</li>
            </ul>
        )
    },
    {
        title: 'Certification',
        id: 'certification',
        content: (
            <ul className='list-disc pl-2 ml-2'>
                <li> Angular Crash Course for Busy Developers</li>
                <li> The Complete JavaScript Course 2025: From Zero to Expert! </li>
                <li>AWS Partner: Technical Accredited</li>
                <li>Introduction to Data Science</li>
                <li>Data  Mining</li>
            </ul>
        )
    }
]

export default function About() {
    const [tab, setTab] = useState('skills');
    const [isPending, startTrans] = useTransition();
    const handleTabChange = (id: React.SetStateAction<string>) => {
        startTrans(() => {
            setTab(id);
        })
    }

    return (
        <section className='text-white min-h-screen xl:min-h-[100vh] my-auto px-12 flex justify-center items-center flex-col md:mb-8 sm:mt-12' id="about">
            <h2 className='text-transparent mb-4  text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold items-center justify-center bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>About Me</h2>
            <div className=' flex flex-col md:flex-row gap-8 xl:gap-16  justify-center items-center py-4'>
                <div className='rounded-full flex items-center bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image src={AboutImage} alt='Hero Image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                        width={300}
                        height={300} />
                </div>
                <div className='md:w-[50%] justify-evenly'>
                    <p className='text-sm sm:text-md lg:text-xl'>I am a motivated and growth-focused professional with a passion for organizing chaos into structured success. With a creative mindset and an uncanny ability to find innovative solutions, I thrive on challenges that push my boundaries. As a goal-driven individual, I possess a knack for effectively managing risks while collaborating seamlessly within a team.</p>
                    <div className='flex mt-8 text-md sm:text-xl lg:text-2xl'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange('certification')} active={tab === 'certification'}>Certification</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>Education</TabButton>
                    </div>
                    <div className='mt-4 text-sm sm:text-md lg:text-xl'>{Tab_data.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section >
    )
}
