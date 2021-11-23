import { OwnedCourseCard } from "@components/course";
import { BaseLayout } from "@components/layout";
import { MarketHeader } from "@components/marketplace";

export default function ManageCourses() {
    return (
        <>
            <div className="py-4">
                <MarketHeader />
            </div>
            <section className="grid grid-cols-1">
                <OwnedCourseCard />
            </section>
        </>
    )
}

ManageCourses.Layout = BaseLayout;