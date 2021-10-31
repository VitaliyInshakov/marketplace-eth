import { ReactNode } from "react";
import { Navbar, Footer } from "@components/common"
import { Web3Provider } from "@components/providers"

export default function BaseLayout({ children }: { children: ReactNode; }) {
	return (
		<Web3Provider>
			<div className="max-w-7xl mx-auto px-4">
				<Navbar />
				<div className="fit">
					{children}
				</div>
			</div>
			<Footer />
		</Web3Provider>
	)
}