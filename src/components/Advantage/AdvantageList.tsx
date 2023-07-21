import { AdvantageItem } from "./AdvantageItem"
import { faChalkboard, faExchange, faLock, faMobile } from "@fortawesome/free-solid-svg-icons"

export const AdvantageList:React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ml:grid-cols-4 ">
            <AdvantageItem title="Safe and secure" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faLock} />
            <AdvantageItem title="Safe and secure" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faChalkboard} />
            <AdvantageItem title="Safe and secure" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faMobile} />
            <AdvantageItem title="Safe and secure" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faExchange} />
        </div>
    )
}

