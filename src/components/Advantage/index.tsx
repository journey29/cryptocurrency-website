import { Description } from "components/Description"
import { Button } from "components/UI/Button"
import { AdvantageList } from "./AdvantageList"

export const Advantage: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <div className="w-full flex flex-col items-center text-center md:flex-row md:text-start md:justify-between md:my-7">
                        <Description title="Safe, guaranteed, and easy to use" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." caption="WHY CHOOSE US" />
                        <Button>
                            Learn More
                        </Button>
                    </div>
                    <AdvantageList />
                </div>
            </div>
        </section>
    )
}
