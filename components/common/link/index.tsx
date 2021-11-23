import React, { ReactNode } from "react";
import Link from "next/link";
import { LinkProps } from "next/dist/client/link";
import { useRouter } from "next/router";

type ActiveLink = {
    children?: ReactNode;
    activeLinkClass?: string;
} & LinkProps;
export default function ActiveLink({ children, activeLinkClass, ...props }: ActiveLink) {
    const { pathname } = useRouter();
    let className = children?.props.className || "";

    if (pathname === props.href) {
        className = `${className} ${activeLinkClass ? activeLinkClass : "text-indigo-600"}`
    }

    return (
        <Link {...props}>
            {React.isValidElement(children) && React.cloneElement(children, { className })}
        </Link>
    )
}