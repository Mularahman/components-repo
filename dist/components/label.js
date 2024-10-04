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
import { Root } from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const labelRequired = "after:content-['*'] after:text-red-500";
const Label = forwardRef((_a, ref) => {
    var { className, required } = _a, props = __rest(_a, ["className", "required"]);
    return (React.createElement(Root, Object.assign({ ref: ref, className: cn(labelVariants(), required && labelRequired, className) }, props)));
});
Label.displayName = Root.displayName;
export { Label };
