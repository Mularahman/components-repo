import { ComponentProps } from 'react';
import Link from 'next/link';
import { ButtonProps } from '../button/button';
import React from 'react';
import '../../libs/tailwind.css';
declare const Pagination: {
    ({ className, ...props }: ComponentProps<"nav">): React.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
    href: string;
} & Pick<ButtonProps, 'size'> & ComponentProps<typeof Link>;
declare const PaginationLink: {
    ({ className, isActive, size, href, ...props }: PaginationLinkProps): React.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, onClick, disabled, }: {
        className?: string;
        onClick: () => void;
        disabled: boolean;
    }): React.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, onClick, disabled, }: {
        className?: string;
        onClick: () => void;
        disabled: boolean;
    }): React.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: ComponentProps<"span">): React.JSX.Element;
    displayName: string;
};
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, };
