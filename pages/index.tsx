import { NextPage } from "next";

import { Navbar, Footer, Hero, Breadcrumbs } from "@components/common";
import { EthRates, WalletBar } from "@components/web3";
import { CourseList } from "@components/course"
import { OrderCard } from "@components/order"

const Home: NextPage = () => {
	return (
		<div>
			<div className="relative bg-white overflow-hidden">
				<div className="relative max-w-7xl mx-auto px-4">
					<Navbar />
					<div className="fit">
						<Hero />
						<Breadcrumbs />
						<WalletBar />
						<EthRates />
						<OrderCard />
						<CourseList />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
