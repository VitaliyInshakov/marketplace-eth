import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	className?: string;
	hoverable?: boolean;
	variant?: string;
	[K: string]: any;
};

export default function Button({
	children,
	className,
	hoverable = true,
	variant = "purple",
	...rest
}: ButtonProps) {
	const variants: Record<string, string> = {
		purple: `text-white bg-indigo-600 ${hoverable && "hover:bg-indigo-700"}`,
		red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
	}

	return (
		<button
			{...rest}
			className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-md text-base font-medium ${className} ${variants[variant]}`}
		>
        {children}
    	</button>
	);
}