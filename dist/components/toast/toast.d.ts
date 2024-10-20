import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { type VariantProps } from 'class-variance-authority';
import React from 'react';
import '../../libs/tailwind.css';
declare const ToastProvider: React.FC<import("@radix-ui/react-toast").ToastProviderProps>;
declare const ToastViewport: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-toast").ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const Toast: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-toast").ToastProps & React.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | "success" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-toast").ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-toast").ToastCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-toast").ToastTitleProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-toast").ToastDescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
type ToastProps = ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = ReactElement<typeof ToastAction>;
export { type ToastProps, type ToastActionElement, ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, };
