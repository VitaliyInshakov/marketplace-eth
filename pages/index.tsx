import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "@pages/_app";
import { Hero } from "@components/common";
import { CourseCard, CourseList } from "@components/course";
import { BaseLayout } from "@components/layout";
import { getAllCourses } from "@content/courses/fetcher";

const Home: NextPageWithLayout = ({ courses }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Hero />
			<CourseList courses={courses}>
				{course =>
					<CourseCard
						key={course.id}
						course={course}
					/>
				}
			</CourseList>
		</>
	);
}

export const getStaticProps: GetStaticProps = () => {
	const { data } = getAllCourses();

	return {
		props: { courses: data },
	};
}

Home.Layout = BaseLayout;

export default Home;
