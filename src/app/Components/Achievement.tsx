"use client";
import React from "react";
import dynamic from "next/dynamic";

interface AnimatedNumbersProps {
    includeComma: boolean;
    animateToNumber: number;
    locale: string;
    className: string;
    configs: (_: unknown, index: number) => {
        mass: number;
        friction: number;
        tensions: number;
    };
}

const AnimatedNumbers = dynamic<AnimatedNumbersProps>(() =>
    import('react-animated-numbers').then(mod => mod.default as React.ComponentType<AnimatedNumbersProps>),
    { ssr: false }
);

const achievementsList = [
    {
        metric: "Projects [Front-end]",
        value: "10",
        postfix: "+",
    },
    {
        metric: "Certifications",
        value: "30",
        postfix: "+",
    },
    {
        prefix: '~',
        metric: "Year Exp.",
        value: "1",
    },
];

const AchievementsSection = () => {
    return (
        <div className="md:py-8 xl:gap-16 sm:py-8 xl:px-16 flex justify-center items-center md:mt-18">
            <div className="sm:border-[#33353F] sm:border rounded-md py-10 px-2 flex flex-row sm:flex-row items-center justify-between md:w-1/2 ">
                {achievementsList.map((achievement, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 "
                    >
                        <h2 className=" text-4xl font-bold flex flex-row text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            {achievement.prefix}
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale="en-US"
                                className="text-white text-4xl font-bold "
                                configs={(_: unknown, index: number) => ({
                                    mass: 1,
                                    friction: 100,
                                    tensions: 140 * (index + 1),
                                })}
                            />
                            {achievement.postfix}
                        </h2>
                        <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
