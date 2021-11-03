import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "@pages/_app";
import { Hero } from "@components/common";
import { CourseList, CourseCard } from "@components/course";
import { BaseLayout } from "@components/layout";
import { CourseType, getAllCourses } from "@content/courses/fetcher";

const Home: NextPageWithLayout = ({ courses }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Hero />
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

Home.Layout = BaseLayout;

export default Home;
