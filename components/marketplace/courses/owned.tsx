import { OwnedCourseCard } from "@components/course";
import { BaseLayout } from "@components/layout";
import { MarketHeader } from "@components/marketplace";

export default function OwnedCourses() {

    return (
        <>
            <MarketHeader />
            <section className="grid grid-cols-1">
                <OwnedCourseCard />
            </section>
        </>
    )
}

OwnedCourses.Layout = BaseLayout;