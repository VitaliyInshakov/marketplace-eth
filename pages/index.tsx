import { NextPageWithLayout } from "@pages/_app";
import { Hero, Breadcrumbs } from "@components/common";
import { EthRates, WalletBar } from "@components/web3";
import { CourseList } from "@components/course";
import { OrderCard } from "@components/order";
import { BaseLayout } from "@components/layout";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Hero />
			<Breadcrumbs />
			<WalletBar />
			<EthRates />
			<OrderCard />
			<CourseList />
		</>
	);
}

Home.Layout = BaseLayout;

export default Home;
