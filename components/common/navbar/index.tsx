import Link from "next/link";
import { useRouter } from "next/router"
import { useWeb3 } from "@components/providers";
import { Button } from "@components/common";

export default function Navbar() {
	const { connect, isWeb3Loaded, isLoading } = useWeb3();
	const router = useRouter();

	return (
		<section>
			<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
				<nav className="relative" aria-label="Global">
					<div className="flex justify-between items-center">
						<div>
							<Link href="/" >
								<a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
									Home
								</a>
							</Link>
							<Link href="/" >
								<a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
									Marketplace
								</a>
							</Link>
							<Link href="/" >
								<a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
									Blogs
								</a>
							</Link>
						</div>
						<div>
							<Link href="/" >
								<a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
									Wishlist
								</a>
							</Link>
							{isLoading
								? <Button onClick={connect} disabled>Loading...</Button>
								: isWeb3Loaded
									? <Button onClick={connect}>Connect</Button>
									: <Button onClick={() => router.push("https://metamask.io/download.html")}>Install Metamask</Button>}
						</div>
					</div>
				</nav>
			</div>
		</section>
	)
}