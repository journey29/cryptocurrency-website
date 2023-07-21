import { Description } from "components/Description"
import { VisionItem } from "./VisionItem"
import WorldMap from 'assets/images/World-map-768x437.png'

export const Vision:React.FC = () => {
  return (
    <section className="mb-16">
        <div className="container">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center text-center">
                    <Description title="Users from all over the world" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leonatoque penatibu." caption="OUR VISION"/>
                    <div className="flex items-center justify-center gap-14 my-6">
                        <VisionItem quantity="32K" text="People Joined"/>
                        <VisionItem quantity="250+" text="VIP Users"/>
                    </div>
                </div>
                <div>
                    <img className="w-full max-w-2xl" src={WorldMap} alt="img" />
                </div>
            </div>
        </div>
    </section>
  )
}
