import React, { useState } from 'react';

type ErrorTextProps = {
    text: string | undefined;
    focused: boolean;
};

export const ErrorText: React.FC<ErrorTextProps> = ({ text, focused }) => {
    return <p className={`text-slate-600 ${!focused ? 'block' : 'hidden'}`}>{text}</p>;
};

type InputProps = {
    label: string;
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
};

export const Input: React.FC<InputProps> = ({ value, onChange, error, type, name, label, placeholder }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="grid justify-items-start w-full mb-2">
            <label htmlFor={name} className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    error ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder={placeholder}
                required
            />
            <ErrorText text={error} focused={focused} />
        </div>
    );
};
