interface TablePaginationProps {
    current: number;
    total: number;
    onChange: (page: number) => void;
}
declare const TablePagination: ({ current, total, onChange }: TablePaginationProps) => import("react/jsx-runtime").JSX.Element;
export default TablePagination;
