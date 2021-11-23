import { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "@pages/_app";
import { CourseCard, CourseList } from "@components/course";
import { BaseLayout } from "@components/layout";
import { CourseType, getAllCourses } from "@content/courses/fetcher";
import { useWalletInfo } from "@components/hooks/web3";
import { OrderModal } from "@components/order";
import { Button } from "@components/common";
import { MarketHeader } from "@components/marketplace";

const Marketplace: NextPageWithLayout = ({ courses }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [selectedCourse, setSelectedCourse] = useState<null | CourseType>(null);
	const { canPurchaseCourse } = useWalletInfo();

	const purchaseCourse = (order: any) => {
		alert(JSON.stringify(order))
	}
	return (
		<>
			<div className="py-4">
				<MarketHeader />
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
					onSubmit={purchaseCourse}
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
