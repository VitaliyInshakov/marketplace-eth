import { OwnedCourseCard } from "@components/course";
import { BaseLayout } from "@components/layout";
import { MarketHeader } from "@components/marketplace";
import { Button, Message } from "@components/common";

export default function OwnedCourses() {
    return (
        <>
            <MarketHeader />
            <section className="grid grid-cols-1">
                <OwnedCourseCard>
                    <Message>
                        My custom message!
                    </Message>
                    <Button>
                        Watch the course
                    </Button>
                </OwnedCourseCard>
            </section>
        </>
    )
}

OwnedCourses.Layout = BaseLayout;