import Image, { StaticImageData } from 'next/image';
import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
interface ProjectCardProps {
    imgUrl: StaticImageData;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div className='flex justify-center flex-col py-2 md:justify-center md:items-center'>
            <div
                className="flex rounded-t-xl group relative items-center justify-center"
                style={{ background: `url(${imgUrl})`, backgroundSize: "" }}
            >
                <div className='relative md:flex justify-center items-center'>
                    <Image className='rounded-t-2xl group-hover:bg-slate-600 group-hover:opacity-20 w-[300px] md:w-[400px]' src={imgUrl} alt={title} objectFit='cover' width={350} height={500} />
                </div>
                <div className="w-full justify-center mx-auto items-center absolute bg-[#181818] bg-opacity-0 hidden group-hover:flex transition-all duration-500">

                    <Link
                        href={gitUrl}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                    <Link
                        href={previewUrl}
                        className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col py-2 text-white rounded-b-xl bg-[#171717] justify-center items-centerw-[300px] md:w-[400px] xl:w-[400px] px-2">
                <h5 className="text-xl font-semibold mb-2 border-b border-blue-50 md:text-center">{title}</h5>
                <p className="text-[#ADB7BE] mb-2">{description}</p>
            </div>
        </div>
    );
};