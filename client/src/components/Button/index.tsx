import React from 'react';
import { Link } from 'react-router-dom';

type LinkButtonProps = {
    link: string;
    children: React.ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = ({ link, children }) => {
    return (
        <Link to={link} className={`text-blue-600 hover:text-blue-700 underline`}>
            {children}
        </Link>
    );
};

export default LinkButton;
