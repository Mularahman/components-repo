import { TextareaHTMLAttributes } from 'react';
import React from 'react';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
