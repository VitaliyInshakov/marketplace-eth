import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "@pages/_app";
import { CourseList } from "@components/course";
import { BaseLayout } from "@components/layout";
import { getAllCourses } from "@content/courses/fetcher";
import { WalletBar } from "@components/web3";
import { useAccount } from "@components/hooks/web3/useAccount";

const Marketplace: NextPageWithLayout = ({ courses }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { account } = useAccount();

	return (
		<>
			<div className="py-4">
				<WalletBar address={account.data} />
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