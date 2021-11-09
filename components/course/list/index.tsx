import { CourseType } from "@content/courses/fetcher";

type ListProps = {
	courses: CourseType[];
	children: (course: CourseType) => JSX.Element;
};

export default function List({ courses,children }: ListProps) {
	return (
		<section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
			{courses.map(course => children(course))}
		</section>
	)
}