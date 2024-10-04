import { ComponentProps } from "react";
import Link from "next/link";
import { ButtonProps } from "@/components/ui/button";
declare const Pagination: {
    ({ className, ...props }: ComponentProps<"nav">): import("react").JSX.Element;
    displayName: string;
};
declare const PaginationContent: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & import("react").RefAttributes<HTMLUListElement>>;
declare const PaginationItem: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & import("react").RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
    href: string;
} & Pick<ButtonProps, "size"> & ComponentProps<typeof Link>;
declare const PaginationLink: {
    ({ className, isActive, size, href, ...props }: PaginationLinkProps): import("react").JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, onClick, disabled, }: {
        className?: string;
        onClick: () => void;
        disabled: boolean;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, onClick, disabled, }: {
        className?: string;
        onClick: () => void;
        disabled: boolean;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: ComponentProps<"span">): import("react").JSX.Element;
    displayName: string;
};
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, };
