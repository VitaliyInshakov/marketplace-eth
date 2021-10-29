import { ReactNode } from "react";
import { Navbar, Footer } from "@components/common"

export default function BaseLayout({ children }: { children: ReactNode; }) {
	return (
		<>
			<div className="max-w-7xl mx-auto px-4">
				<Navbar />
				<div className="fit">
					{children}
				</div>
			</div>
			<Footer />
		</>
	)
}