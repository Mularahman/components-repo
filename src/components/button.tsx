// src/components/Button.tsx
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'danger' | 'success';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }) => {
  const buttonClass = clsx(
    'px-4 py-2 rounded text-white font-semibold', // base style
    {
      'bg-blue-500 hover:bg-blue-700': variant === 'primary', // Primary button
      'bg-red-500 hover:bg-red-700': variant === 'danger', // Danger button
      'bg-green-500 hover:bg-green-700': variant === 'success', // Success button
    }
  );

  return <button className={buttonClass}>{children}</button>;
};

export default Button;
