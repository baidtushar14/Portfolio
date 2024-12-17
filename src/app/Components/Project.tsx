'use client';
import React, { useState, useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { motion, useInView } from 'framer-motion';
import project1 from '../../../public/images/project1.png';
import Banker from '../../../public/images/Banker.png';
import game1 from '../../../public/images/Game1.png';
import game2 from '../../../public/images/Game2.png';
import { ProjectTag } from './TabButton';

const projectsData = [
    {
        id: 1,
        title: 'Ping Game',
        description: 'This is a 2-player game where each player rolls the dice and can choose to hold their current score at any time. If a player rolls a one, their turn ends immediately, and the chance passes to the other player, regardless of whether they held their score or not. The first player to reach a score of 50 wins the game.',
        image: game1,
        tag: ['All', 'Games'],
        gitUrl: 'https://github.com/baidtushar14/Ping-game-using-Js',
        previewUrl: 'https://pinggame.netlify.app/'
    },
    {
        id: 2,
        title: 'Banker',
        description: 'This banking application securely stores customer account details. You can check your account balance, transfer money, and apply for an instant loan up to 10% of your balance. You can see username and pin of account holder in console. For security, the account will automatically log off after 5 minutes.',
        image: Banker,
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/baidtushar14/banker',
        previewUrl: 'https://accountholder.netlify.app/'
    },
    {
        id: 3,
        title: 'Guess the number',
        description: 'This is a 2-player game where each player must choose a number between 1 and 20. Hints are provided if the chosen number is too low or too high. The high score is saved as a challenge for both players to beat.',
        image: game2,
        tag: ['All', 'Games'],
        gitUrl: 'https://github.com/baidtushar14/Guess-the-number-using-Js',
        previewUrl: 'https://choosethenumber.netlify.app/'
    },
    {
        id: 4,
        title: 'Forkify',
        description: 'This is a recipe application where you can search for any fast food and get the recipe. You can also add your own recipes and bookmark your favorite dishes.',
        image: project1,
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/baidtushar14/forkify',
        previewUrl: 'https://lighthearted-halva-c9180d.netlify.app/'
    },

];

export default function Project() {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: React.SetStateAction<string>) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section className='container xl:min-h-screen items-center flex flex-col justify-center mt-8 xl:mt-0 md:justify-center md:items-center' >
            <h2 className="text-center text-4xl font-bold text-white my-4">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Games"
                    isSelected={tag === "Games"}
                />
            </div>
            <ul ref={ref} className="flex gap-4 flex-col md:flex-row md:flex-wrap md:justify-center md:gap-10 xl:px-18 xl:gap-auto">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}