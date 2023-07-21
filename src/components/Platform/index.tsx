import { Description } from "components/Description"
import Machine from 'assets/images/Machine-768x768.png'


export const Platform: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center ml:flex-row ml:justify-center ml:gap-20">
                    <div className="flex flex-col items-center text-center ml:text-start ml:items-start max-w-md">
                        <Description title="Trusted Platform" caption="PROFITABLE BLOCKCHAIN" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud." textCenter={true} />
                        <div className="flex flex-col items-center text-center gap-4 my-5 sl:flex-row sl:gap-8">
                            <div>
                                <p className="text-global-color-green font-semibold text-3xl mb-3">100K+</p>
                                <p className="text-gray text-xs">ransaction Success</p>
                            </div>
                            <div>
                                <p className="text-global-color-green font-semibold text-3xl mb-3">250+</p>
                                <p className="text-gray text-xs">Total Global Note</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="w-full max-w-md" src={Machine} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
