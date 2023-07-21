import { Description } from "components/Description"
import TestimonialsImg from 'assets/images/about/photo-01.jpg'


export const Testimonials: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <Description title="OwnerShip and Impact" caption="What they say" text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
                    <div className="flex flex-col items-center text-center my-8">
                        <img className="mb-5 max-w-lg w-full" src={TestimonialsImg} alt="img" />
                        <div className="max-w-md">
                            <p className="mb-3 leading-5 ml:text-base">“The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics.“</p>
                            <div>
                                <p className="mb-1 font-semibold text-lg ml:text-xl">Steve Leon</p>
                                <p className="text-gray font-medium">IT Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
