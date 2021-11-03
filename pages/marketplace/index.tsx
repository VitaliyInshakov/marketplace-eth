import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "@pages/_app";
import { CourseCard, CourseList } from "@components/course";
import { BaseLayout } from "@components/layout";
import { CourseType, getAllCourses } from "@content/courses/fetcher";
import { WalletBar } from "@components/web3";
import { useAccount } from "@components/hooks/web3/useAccount";
import { useNetwork } from "@components/hooks/web3/useNetwork";

const Marketplace: NextPageWithLayout = ({ courses }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { account } = useAccount();
	const { network } = useNetwork()

	return (
		<>
			<div className="py-4">
				<WalletBar
					address={account.data}
					network={network.data}
				/>
			</div>
			<CourseList courses={courses} />
		</>
	);
}

export const getStaticProps: GetStaticProps = () => {
	const { data } = getAllCourses();

	return {
		props: { courses: data },
	};
}

Marketplace.Layout = BaseLayout;

export default Marketplace;
