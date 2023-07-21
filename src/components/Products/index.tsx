import { Description } from "components/Description"
import { ProductsList } from "./ProductsList"

export const Products: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center text-center">
                        <Description title="We provide various solutions to help you" caption="ABOUT OUR PRODUCTS" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leonatoque penatibu" />
                    </div>
                    <ProductsList />
                </div>
            </div>
        </section>
    )
}
