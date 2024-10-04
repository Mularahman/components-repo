import React from 'react';
type ButtonProps = {
    variant?: 'primary' | 'danger' | 'success';
    children: React.ReactNode;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
