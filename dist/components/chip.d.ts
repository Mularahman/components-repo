import { ButtonHTMLAttributes } from 'react';
import { type VariantProps } from 'class-variance-authority';
import React from 'react';
declare const chipVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
}
declare const Chip: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLDivElement>>;
export { Chip, chipVariants };
