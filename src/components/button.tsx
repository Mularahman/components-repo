// src/components/Button.tsx
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'danger' | 'success';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; 
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className, 
  onClick
}) => {
  const buttonClass = clsx(
    'px-4 py-2 rounded text-white font-semibold', 
    {
      'bg-blue-500 hover:bg-blue-700': variant === 'primary', 
      'bg-red-500 hover:bg-red-700': variant === 'danger', 
      'bg-green-500 hover:bg-green-700': variant === 'success', 
    },
    className 
  );

  return <button className={buttonClass} onClick={onClick}>{children}</button>;
};

export default Button;
