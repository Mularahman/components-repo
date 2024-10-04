import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
declare const chipVariants: (props?: ({
    variant?: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
}
declare const Chip: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLDivElement>>;
export { Chip, chipVariants };
