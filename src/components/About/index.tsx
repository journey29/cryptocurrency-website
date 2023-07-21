import { Description } from "components/Description"
import { Button } from "components/UI/Button"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AboutList } from "./AboutList"


export const About: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <Description textCenter={true} title="Accelerate the world’s transition" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." caption="ABOUT US" />
                    <Button>
                        More About Us
                    </Button>
                    <div className="relative bg-[url(./assets/images/about/photo-01.jpg)] bg-cover bg-center bg-no-repeat h-96 w-full">
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center gap-4 bg-light-black">
                            <h4 className="font-semibold text-2xl md:text-4xl">Fortune favours the brave</h4>
                            <button className="w-12 h-12 rounded-full bg-global-color-green flex items-center justify-center hover:scale-90 duration-300 ease-in">
                                <FontAwesomeIcon className="text-global-color-primary" icon={faPlay} />
                            </button>
                        </div>
                    </div>
                    <AboutList />
                </div>
            </div>
        </section>
    )
}
