import { ProductsItem } from "./ProductsItem"
import { faBitcoin } from "@fortawesome/free-brands-svg-icons"
import { faExchange, faMoneyBillTransfer, faWallet } from "@fortawesome/free-solid-svg-icons"

export const ProductsList:React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 xl:grid-cols-4">
            <ProductsItem title="Crypto Earn" icon={faBitcoin} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <ProductsItem title="Exchanges" icon={faExchange} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <ProductsItem title="Defi Wallet" icon={faWallet} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <ProductsItem title="Converter" icon={faMoneyBillTransfer} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
    )
}

