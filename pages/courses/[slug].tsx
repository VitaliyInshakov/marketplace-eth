import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "@pages/_app";
import { Modal } from "@components/common";
import { CourseHero, Curriculum, Keypoints } from "@components/course";
import { BaseLayout } from "@components/layout";
import { getAllCourses } from "@content/courses/fetcher";

const Course: NextPageWithLayout = ({ course }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<div className="py-4">
				<CourseHero
					title={course.title}
					description={course.description}
					image={course.coverImage}
				/>
			</div>
			<Keypoints
				points={course.wsl}
			/>
			<Curriculum locked={true} />
			<Modal />
		</>
	)
}

export const getStaticPaths: GetStaticPaths = () => {
	const { data } = getAllCourses();

	return {
		paths: data.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = ({ params }) => {
	const { data } = getAllCourses();
	const course = data.filter(course => course.slug === params?.slug)[0];

	return {
		props: { course },
	};
}

Course.Layout = BaseLayout;

export default Course;