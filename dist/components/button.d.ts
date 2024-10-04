import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import React from "react";
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | null | undefined;
    size?: "default" | "icon" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };