import { NextPage } from "next";

import { Modal } from "@components/common";
import { CourseHero, Curriculum, Keypoints } from "@components/course";

const Course: NextPage = () => {
	return (
		<div className="relative max-w-7xl mx-auto px-4">
			<CourseHero />
			<Keypoints />
			<Curriculum />
			<Modal />
		</div>
	)
}

export default Course;