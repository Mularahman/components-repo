var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
const chipVariants = cva("relative grid select-none items-center whitespace-nowrap font-bold", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:opacity-90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-white hover:opacity-90",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-10 rounded-xl py-2 px-3",
            sm: "h-9 rounded-xl py-1.5 px-3",
            lg: "h-11 rounded-xxl py-1.5 px-5",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Chip = forwardRef((_a, ref) => {
    var { className, variant, size } = _a, props = __rest(_a, ["className", "variant", "size"]);
    return (React.createElement("div", Object.assign({ className: cn(chipVariants({ variant, size, className })), ref: ref }, props)));
});
Chip.displayName = "Chip";
export { Chip, chipVariants };
