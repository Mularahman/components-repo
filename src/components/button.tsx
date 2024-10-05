import React from 'react';

type ButtonProps = {
    variant?: 'default' | 'primary' | 'success' | 'danger';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, onClick, className }) => {
    const baseStyles = 'py-2 px-4 rounded focus:outline-none';
    const variantStyles = {
        default: 'bg-gray-300 text-black hover:bg-gray-400',
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        success: 'bg-green-500 text-white hover:bg-green-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    return (
        <button onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
};

export default Button;
