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
import Link from "next/link";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/libs/utils";
import { buttonVariants } from "@/components/ui/button";
const Pagination = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("nav", Object.assign({ role: "navigation", "aria-label": "pagination", className: cn("mx-auto flex w-full justify-center", className) }, props)));
};
Pagination.displayName = "Pagination";
const PaginationContent = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("ul", Object.assign({ ref: ref, className: cn("flex flex-row items-center gap-1", className) }, props)));
});
PaginationContent.displayName = "PaginationContent";
const PaginationItem = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("li", Object.assign({ ref: ref, className: cn("", className) }, props)));
});
PaginationItem.displayName = "PaginationItem";
const PaginationLink = (_a) => {
    var { className, isActive, size = "icon", href } = _a, props = __rest(_a, ["className", "isActive", "size", "href"]);
    return (React.createElement(Link, Object.assign({ href: href, "aria-current": isActive ? "page" : undefined, className: cn(buttonVariants({
            variant: isActive ? "outline" : "ghost",
            size,
        }), className) }, props)));
};
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({ className, onClick, disabled, }) => (React.createElement("button", { "aria-label": "Go to previous page", className: cn(buttonVariants({
        variant: "ghost",
        size: "default",
    }), "gap-1 pl-2.5", className), onClick: disabled ? undefined : onClick, disabled: disabled },
    React.createElement(ChevronLeft, { className: "h-4 w-4" }),
    React.createElement("span", null, "Previous")));
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({ className, onClick, disabled, }) => (React.createElement("button", { "aria-label": "Go to next page", className: cn(buttonVariants({
        variant: "ghost",
        size: "default",
    }), "gap-1 pr-2.5", className), onClick: disabled ? undefined : onClick, disabled: disabled },
    React.createElement("span", null, "Next"),
    React.createElement(ChevronRight, { className: "h-4 w-4" })));
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("span", Object.assign({ "aria-hidden": true, className: cn("flex h-9 w-9 items-center justify-center", className) }, props),
        React.createElement(MoreHorizontal, { className: "h-4 w-4" }),
        React.createElement("span", { className: "sr-only" }, "More pages")));
};
PaginationEllipsis.displayName = "PaginationEllipsis";
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, };