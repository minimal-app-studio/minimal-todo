import React, { useState } from 'react';

type ErrorTextProps = {
    text: string | undefined;
    focused: boolean;
};

export const ErrorText: React.FC<ErrorTextProps> = ({ text, focused }) => {
    return <p>{!focused ? text : ''}</p>;
};

type InputProps = {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
};

export const Input: React.FC<InputProps> = ({ value, onChange, error, type, name, label }) => {
    const [focused, setFocused] = useState(false);

    return (
        <>
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
            <ErrorText text={error} focused={focused} />
        </>
    );
};
