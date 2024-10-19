import { ReactNode } from 'react';
import type { ToastActionElement, ToastProps } from '../components/toast/toast';
type ToasterToast = ToastProps & {
    id: string;
    title?: ReactNode;
    description?: ReactNode;
    action?: ToastActionElement;
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type ActionType = typeof actionTypes;
type Action = {
    type: ActionType['ADD_TOAST'];
    toast: ToasterToast;
} | {
    type: ActionType['UPDATE_TOAST'];
    toast: Partial<ToasterToast>;
} | {
    type: ActionType['DISMISS_TOAST'];
    toastId?: ToasterToast['id'];
} | {
    type: ActionType['REMOVE_TOAST'];
    toastId?: ToasterToast['id'];
};
interface State {
    toasts: ToasterToast[];
}
export declare const reducer: (state: State, action: Action) => State;
type Toast = Omit<ToasterToast, 'id'>;
export declare const toast: ({ ...props }: Toast) => {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
export declare const useToast: () => {
    toast: ({ ...props }: Toast) => {
        id: string;
        dismiss: () => void;
        update: (props: ToasterToast) => void;
    };
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};
export {};
