import { AboutItem } from "./AboutItem"
import { faChartSimple, faMoneyBill, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export const AboutList:React.FC = () => {
    return (
        <div className="grid grid-cols-1 w-full md:grid-cols-2 ml:grid-cols-3">
            <AboutItem title="Fiat & Crypto Payments" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faMoneyBill} />
            <AboutItem title="Customizable Flows" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faChartSimple} />
            <AboutItem title="Scalable Profits" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faPaperPlane} />
        </div>
    )
}
