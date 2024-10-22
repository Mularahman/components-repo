import { TextareaHTMLAttributes } from 'react';
import React from 'react';
import "../libs/style.css";
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
