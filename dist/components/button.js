import React from "react";
import 'libs/tailwind';
const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    danger: 'bg-red-500 text-white hover:bg-red-700',
    outline: 'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white',
    success: 'bg-green-500 text-white hover:bg-green-700',
};
const Button = ({ label = 'Button', className = '', onClick, variant = 'primary' }) => {
    const classes = `${variantClasses[variant]} px-4 py-2 rounded ${className}`;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: onClick, className: classes }, label)));
};
export default Button;
