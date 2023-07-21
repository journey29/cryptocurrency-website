import { Description } from "components/Description"
import { StepsList } from "./StepsList"

export const Steps: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <Description caption="STEP BY STEP GUIDE" title="Easy Steps to Success" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leonatoque penatibu." />
                    <StepsList />
                </div>
            </div>
        </section>
    )
}
