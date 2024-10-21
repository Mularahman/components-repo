import { ComponentPropsWithoutRef, HTMLAttributes } from 'react';
import { Content } from '@radix-ui/react-dialog';
import { type VariantProps } from 'class-variance-authority';
import React from 'react';
import "../libs/tailwind.css";
declare const Sheet: React.FC<import("@radix-ui/react-dialog").DialogProps>;
declare const SheetTrigger: React.ForwardRefExoticComponent<import("@radix-ui/react-dialog").DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React.ForwardRefExoticComponent<import("@radix-ui/react-dialog").DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React.FC<import("@radix-ui/react-dialog").DialogPortalProps>;
declare const SheetOverlay: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface SheetContentProps extends ComponentPropsWithoutRef<typeof Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };
