import { CourseType } from "@content/courses/fetcher";
import { CourseCard } from "@components/course";

type ListProps = {
	courses: CourseType[];
};

export default function List({ courses }: ListProps) {
	return (
		<section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
			{courses.map(course => <CourseCard key={course.id} course={course} />)}
		</section>
	)
}