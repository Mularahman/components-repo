import { InputHTMLAttributes } from 'react';
import React from 'react';
import "../libs/tailwind.css";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
