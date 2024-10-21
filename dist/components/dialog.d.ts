import { HTMLAttributes } from 'react';
import React from 'react';
import "../libs/tailwind.css";
declare const Dialog: React.FC<import("@radix-ui/react-dialog").DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<import("@radix-ui/react-dialog").DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<import("@radix-ui/react-dialog").DialogPortalProps>;
declare const DialogClose: React.ForwardRefExoticComponent<import("@radix-ui/react-dialog").DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, };
