import { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import { Content } from "@radix-ui/react-dialog";
import { type VariantProps } from "class-variance-authority";
declare const Sheet: any;
declare const SheetTrigger: any;
declare const SheetClose: any;
declare const SheetPortal: any;
declare const SheetOverlay: import("react").ForwardRefExoticComponent<any>;
declare const sheetVariants: (props?: ({
    side?: "left" | "top" | "bottom" | "right" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface SheetContentProps extends ComponentPropsWithoutRef<typeof Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: import("react").ForwardRefExoticComponent<SheetContentProps & import("react").RefAttributes<any>>;
declare const SheetHeader: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
    displayName: string;
};
declare const SheetTitle: import("react").ForwardRefExoticComponent<any>;
declare const SheetDescription: import("react").ForwardRefExoticComponent<any>;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };
