import courses from "../index.json";

export type CourseType = {
	id: string;
	type: string;
	title: string;
	description: string;
	coverImage: string;
	author: string;
	link: string;
	slug: string;
	wsl: string[];
	createdAt: string;
	index?: number;
};

export const getAllCourses = (): { data: CourseType[]; courseMap: Record<string, CourseType>; } => {
	return {
		data: courses,
		courseMap: courses.reduce((acc, item, index) => {
			acc[item.id] = item;
			acc[item.id].index = index;
			return acc;
		}, {} as Record<string, CourseType>),
	}
};