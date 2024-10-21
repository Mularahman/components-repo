import React from "react";
interface TablePaginationProps {
    current: number;
    total: number;
    onChange: (page: number) => void;
}
declare const TablePagination: ({ current, total, onChange, }: TablePaginationProps) => React.JSX.Element;
export default TablePagination;
