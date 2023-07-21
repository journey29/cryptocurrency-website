import { Description } from "components/Description"
import { Button } from "components/UI/Button"
import { AdvantageList } from "./AdvantageList"

export const Advantage: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <Description title="Safe, guaranteed, and easy to use" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." caption="WHY CHOOSE US" />
                    <Button>
                        Learn More
                    </Button>
                    <AdvantageList />
                </div>
            </div>
        </section>
    )
}
