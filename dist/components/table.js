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
import { cn } from "@/libs/utils";
const Table = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", { className: "relative w-full overflow-auto" },
        React.createElement("table", Object.assign({ ref: ref, className: cn("w-full caption-bottom text-sm", className) }, props))));
});
Table.displayName = "Table";
const TableHeader = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("thead", Object.assign({ ref: ref, className: cn("[&_tr]:border-b", className) }, props)));
});
TableHeader.displayName = "TableHeader";
const TableBody = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("tbody", Object.assign({ ref: ref, className: cn("[&_tr:last-child]:border-0", className) }, props)));
});
TableBody.displayName = "TableBody";
const TableFooter = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("tfoot", Object.assign({ ref: ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className) }, props)));
});
TableFooter.displayName = "TableFooter";
const TableRow = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("tr", Object.assign({ ref: ref, className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className) }, props)));
});
TableRow.displayName = "TableRow";
const TableHead = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("th", Object.assign({ ref: ref, className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className) }, props)));
});
TableHead.displayName = "TableHead";
const TableCell = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("td", Object.assign({ ref: ref, className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className) }, props)));
});
TableCell.displayName = "TableCell";
const TableCaption = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("caption", Object.assign({ ref: ref, className: cn("mt-4 text-sm text-muted-foreground", className) }, props)));
});
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, };