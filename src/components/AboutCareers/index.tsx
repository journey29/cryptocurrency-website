import { Overview } from "components/Overview"
import { AboutCareersList } from "./AboutCareersList"

export const AboutCareers = () => {

    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <Overview title="Let's grow with us" caption="About Careers" />
                    <AboutCareersList />
                </div>
            </div>
        </section>
    )
}
