'use client';
import Image from 'next/image'
import React from 'react'
import HeroImage from '../../../public/images/Designer.png'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function HeroSection() {
    return (
        <div>
            <section className='min-h-screen flex items-center px-16 my-auto mx-auto sm:mt-20 md:mt-0 ' id='home'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} className='sm:flex justify-items-center '>
                    <div className='text-center md:mt-16 sm:text-left'>
                        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                                Hello, I&apos;m{" "}
                            </span>
                            <div className='w-full text-[22px] md:text-4xl xl:text-5xl '>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Tushar Baid',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Front-end Developer',
                                        1000,
                                        'Website Developer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={99}
                                    repeat={Infinity}
                                />
                            </div>
                        </h1>
                        <p className='text-[#ADB7BE] text-lg lg:text-xl mb-4'>I embrace each new challenge as an opportunity for growth, tackling them with a positive attitude and an unwavering dedication to achieving impactful solutions. A perpetual learner, I thrive in dynamic environments where adaptability is key. I believe in the power of flexibility to create innovative pathways to success.
                        </p>
                        <div className='flex flex-col md:flex-row'>
                            <Link href={'#contact'} className='px-1 py-3 md:mt-4 md:px-5 rounded-full md:mr-4 bg-white hover:bg-slate-200 text-white w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-tl'><span className='px-20 md:px-5 py-2 md:py-4'>
                                Hire me
                            </span></Link>
                            <Link href="./Tushar.pdf" download='CV'
                                className='px-1 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-tl text-white mt-5 w-full sm:w-fit'
                            >
                                <span className='md:bg-[#121212] rounded-full px-16 md:px-5 py-2 md:py-2'>
                                    Download CV
                                </span>

                            </Link>
                        </div>
                    </div>

                    <div className=' mt-8 md:mt-4 lg:mt-0'>
                        <div className='rounded-full items-center bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                            <Image src={HeroImage} alt='Hero Image'
                                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                                width={300}
                                height={300} />
                        </div>
                    </div>
                </motion.div>

            </section>
        </div>
    )
}
