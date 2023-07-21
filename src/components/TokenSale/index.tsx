import { Description } from "components/Description"
import { Button } from "components/UI/Button"

export const TokeSale: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <Description title="Join Token Sale" caption="Don't miss it" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
                    <Button>
                        Register Now
                    </Button>
                    <div className="flex flex-col items-center text-center gap-5 bg-global-color-secondary px-7 py-9">
                        <div className="w-full">
                            <h4 className="font-semibold text-2xl mb-3">Token Sale has finished!</h4>
                            <p className="max-w-3xl text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                        <div className="flex items-center justify-between border-b-8 rounded-md border-global-color-green w-full pb-3 font-semibold">
                            <p>$0M</p>
                            <p>$60M</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-9">
                            <div className="text-sm flex flex-col gap-1">
                                <span className="text-gray">Softcap in 325 days</span>
                                <p>$200.000 USD</p>
                            </div>
                            <div className="text-sm flex flex-col gap-1">
                                <span className="text-gray">Softcap in 325 days</span>
                                <p>$200.000 USD</p>
                            </div>
                            <div className="text-sm flex flex-col gap-1">
                                <span className="text-gray">Softcap in 325 days</span>
                                <p>$200.000 USD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

