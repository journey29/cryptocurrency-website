import { StepsItem } from "./StepsItem"
import { faMoneyBill, faWallet } from "@fortawesome/free-solid-svg-icons"
import { faPaypal } from "@fortawesome/free-brands-svg-icons"

export const StepsList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ml:grid-cols-3">
            <StepsItem title="Create Wallet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faWallet} />
            <StepsItem title="Buy and or Sell" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faMoneyBill} />
            <StepsItem title="Make Payment" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={faPaypal} />
        </div>
    )
}

