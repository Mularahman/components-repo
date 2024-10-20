import { InputHTMLAttributes } from 'react';
import React from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };