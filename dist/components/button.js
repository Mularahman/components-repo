// src/components/Button.tsx
import React from 'react';
import clsx from 'clsx';
const Button = ({ variant = 'primary', children }) => {
    const buttonClass = clsx('px-4 py-2 rounded text-white font-semibold', // base style
    {
        'bg-blue-500 hover:bg-blue-700': variant === 'primary', // Primary button
        'bg-red-500 hover:bg-red-700': variant === 'danger', // Danger button
        'bg-green-500 hover:bg-green-700': variant === 'success', // Success button
    });
    return React.createElement("button", { className: buttonClass }, children);
};
export default Button;
