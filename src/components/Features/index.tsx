import { Description } from "components/Description"
import { FeaturesItem } from "./FeaturesItem"
import { faContactCard, faHeadphones, faStar, faUser } from "@fortawesome/free-solid-svg-icons"
import PlantBitcoin from 'assets/images/Plant-Bitcoin-768x768.png'

export const Features: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center text-center">
                        <Description caption="Our Features" title="All you need is here" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leonatoque penatibu." />
                        <div className="md:flex md:flex-row">
                            <FeaturesItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Free Trial Account" icon={faUser} />
                            <FeaturesItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Affordable Plans" icon={faContactCard} />
                        </div>
                    </div>
                    <div className="md:order-2">
                        <img className="max-w-md w-full" src={PlantBitcoin} alt="img" />
                    </div>
                    <div className="md:flex md:flex-row">
                        <FeaturesItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Guided By Experts" icon={faStar} />
                        <FeaturesItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="24/7 Live Support" icon={faHeadphones} />
                    </div>
                </div>
            </div>
        </section>
    )
}
