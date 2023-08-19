import React from 'react';
import { Link } from 'react-router-dom';

type LinkButtonProps = {
    link: string;
    children: React.ReactNode;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ link, children }) => {
    return (
        <Link to={link} className={`text-slate-600 hover:text-slate-700 underline`}>
            {children}
        </Link>
    );
};

type ButtonProps = {
    variant: 'dark' | 'light';
    children: React.ReactNode;
    onClick: () => void; // Add the onClick prop
};

export const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
    const isDark = variant === 'dark';

    const buttonClasses = `
        text-${isDark ? 'white' : 'gray-900'} 
        bg-${isDark ? 'gray-800' : 'white'} 
        border 
        border-gray-300 
        focus:outline-none 
        hover:bg-${isDark ? 'gray-700' : 'gray-100'} 
        focus:ring-4 
        focus:ring-${isDark ? 'gray-700' : 'gray-200'} 
        font-medium 
        rounded-lg 
        text-sm 
        px-5 py-2.5 
        mr-2 mb-2 
        dark:bg-${isDark ? 'gray-800' : 'gray-300'} 
        dark:text-${isDark ? 'white' : 'gray-900'} 
        dark:border-${isDark ? 'gray-600' : 'gray-500'} 
        dark:hover:bg-${isDark ? 'gray-700' : 'gray-400'} 
        dark:hover:border-${isDark ? 'gray-600' : 'gray-500'} 
        dark:focus:ring-${isDark ? 'gray-700' : 'gray-500'}
        focus:outline-none`;

    return (
        <button type="button" className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
};
