import { NextPageWithLayout } from "@pages/_app";
import { Modal } from "@components/common";
import { CourseHero, Curriculum, Keypoints } from "@components/course";
import { BaseLayout } from "@components/layout";

const Course: NextPageWithLayout = () => {
	return (
		<>
			<div className="py-4">
				<CourseHero />
			</div>
			<Keypoints />
			<Curriculum />
			<Modal />
		</>
	)
}

Course.Layout = BaseLayout;

export default Course;