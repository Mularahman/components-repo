import { type VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
declare const badgeVariants: (props?: ({
    variant?: "default" | "outline" | "secondary" | "destructive" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): import("react").JSX.Element;
export { Badge, badgeVariants };
