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
import { forwardRef, } from "react";
import { Action, Cancel, Content, Description, Overlay, Portal, Root, Title, Trigger, } from "@radix-ui/react-alert-dialog";
import { cn } from "@/libs/utils";
import { buttonVariants } from "@/components/ui/button";
const AlertDialog = Root;
const AlertDialogTrigger = Trigger;
const AlertDialogPortal = Portal;
const AlertDialogOverlay = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(Overlay, Object.assign({ className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className) }, props, { ref: ref })));
});
AlertDialogOverlay.displayName = Overlay.displayName;
const AlertDialogContent = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(AlertDialogPortal, null,
        React.createElement(AlertDialogOverlay, null),
        React.createElement(Content, Object.assign({ ref: ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className) }, props))));
});
AlertDialogContent.displayName = Content.displayName;
const AlertDialogHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: cn("flex flex-col space-y-2 text-center sm:text-left", className) }, props)));
};
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
};
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(Title, Object.assign({ ref: ref, className: cn("text-lg font-semibold", className) }, props)));
});
AlertDialogTitle.displayName = Title.displayName;
const AlertDialogDescription = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(Description, Object.assign({ ref: ref, className: cn("text-sm text-muted-foreground", className) }, props)));
});
AlertDialogDescription.displayName = Description.displayName;
const AlertDialogAction = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(Action, Object.assign({ ref: ref, className: cn(buttonVariants(), className) }, props)));
});
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(Cancel, Object.assign({ ref: ref, className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className) }, props)));
});
AlertDialogCancel.displayName = Cancel.displayName;
export { AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, };