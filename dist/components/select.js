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
import { Content, Group, Icon, Item, ItemIndicator, ItemText, Label, Portal, Root, ScrollDownButton, ScrollUpButton, Separator, Trigger, Value, Viewport, } from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/libs/utils";
const Select = Root;
const SelectGroup = Group;
const SelectValue = Value;
const SelectTrigger = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(Trigger, Object.assign({ ref: ref, className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className) }, props),
        children,
        React.createElement(Icon, { asChild: true },
            React.createElement(ChevronDown, { className: "h-4 w-4 opacity-50" }))));
});
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(ScrollUpButton, Object.assign({ ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className) }, props),
        React.createElement(ChevronUp, { className: "h-4 w-4" })));
});
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(ScrollDownButton, Object.assign({ ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className) }, props),
        React.createElement(ChevronDown, { className: "h-4 w-4" })));
});
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = forwardRef((_a, ref) => {
    var { className, children, position = "popper" } = _a, props = __rest(_a, ["className", "children", "position"]);
    return (React.createElement(Portal, null,
        React.createElement(Content, Object.assign({ ref: ref, className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position }, props),
            React.createElement(SelectScrollUpButton, null),
            React.createElement(Viewport, { className: cn("p-1", position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]") }, children),
            React.createElement(SelectScrollDownButton, null))));
});
SelectContent.displayName = Content.displayName;
const SelectLabel = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(Label, Object.assign({ ref: ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className) }, props)));
});
SelectLabel.displayName = Label.displayName;
const SelectItem = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(Item, Object.assign({ ref: ref, className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className) }, props),
        React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
            React.createElement(ItemIndicator, null,
                React.createElement(Check, { className: "h-4 w-4" }))),
        React.createElement(ItemText, null, children)));
});
SelectItem.displayName = Item.displayName;
const SelectSeparator = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(Separator, Object.assign({ ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className) }, props)));
});
SelectSeparator.displayName = Separator.displayName;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, };