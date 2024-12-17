import React from 'react';

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

export const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE] border-b-white';
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 hover:text-white border-b-purple-500 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};
// import React from 'react';

interface ProjectTagProps {
    name: string;
    isSelected: boolean;
    onClick: (name: string) => void;
}

export const ProjectTag: React.FC<ProjectTagProps> = ({ name, isSelected, onClick }) => {
    const buttonStyles = isSelected
        ? "text-white border-purple-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-purple-500";

    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};