import { Description } from "components/Description"
import CryptoSwap from 'assets/images/Crypto-Swap-Exchange-3D-Illustration-768x769.png'
import { Button } from "components/UI/Button"


export const Exchange: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center ml:flex-row ml:justify-center ml:gap-20">
                    <div className="flex flex-col items-center text-center ml:text-end ml:items-end max-w-md">
                        <Description title="Low fees and deep liquidity" caption="CRYPTO EXCHANGE" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud." />
                        <Button>
                            Go to Exchanges
                        </Button>
                    </div>
                    <div className="-order-1">
                        <img className="max-w-md w-full" src={CryptoSwap} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
