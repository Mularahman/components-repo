import React from "react";
interface ButtonProps {
    label?: string;
    className?: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success';
}
declare const Button: ({ label, className, onClick, variant }: ButtonProps) => React.JSX.Element;
export default Button;
