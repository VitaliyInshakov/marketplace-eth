import { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "@pages/_app";
import { CourseCard, CourseList } from "@components/course";
import { BaseLayout } from "@components/layout";
import { CourseType, getAllCourses } from "@content/courses/fetcher";
import { EthRates, WalletBar } from "@components/web3";
import { useAccount, useNetwork } from "@components/hooks/web3";
import { OrderModal } from "@components/order";
import { Button } from "@components/common";
import { useEthPrice } from "@components/hooks/useEthPrice";

const Marketplace: NextPageWithLayout = ({ courses }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [selectedCourse, setSelectedCourse] = useState<null | CourseType>(null);
	const { account } = useAccount();
	const { network } = useNetwork();
	const { eth } = useEthPrice();

	const canPurchaseCourse = !!(account.data && network.isSupported);
	return (
		<>
			<div className="py-4">
				<WalletBar
					address={account.data}
					network={{
						data: network.data,
						target: network.target,
						isSupported: network.isSupported,
						hasInitialResponse: network.hasInitialResponse
					}}
				/>
				<EthRates
					eth={eth.data}
					ethPerItem={eth.perItem}
				/>
			</div>
			<CourseList
				courses={courses}
			>
				{(course: CourseType) =>
					<CourseCard
						key={course.id}
						course={course}
						disabled={!canPurchaseCourse}
						Footer={() =>
							<div className="mt-4">
								<Button
									onClick={() => setSelectedCourse(course)}
									disabled={!canPurchaseCourse}
									variant="lightPurple">
									Purchase
								</Button>
							</div>
						}
					/>}
			</CourseList>
			{selectedCourse &&
				<OrderModal
					course={selectedCourse}
					onClose={() => setSelectedCourse(null)}
				/>}
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
