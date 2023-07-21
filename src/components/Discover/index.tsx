import { Description } from "components/Description"
import AppStore from 'assets/images/discover/app-store.png'
import GooglePlay from 'assets/images/discover/google-play-300x86.png'
import App from 'assets/images/discover/App-1-576x1024.png'
import { useSpring, animated } from '@react-spring/web'


export const Discover: React.FC = () => {
    const springProps = useSpring({
        from: { x: -1000, opacity: 0 },
        to: { x: 0, opacity: 1 },
        config: {
            duration: 700
        }
    })
    return (
        <animated.section className="mb-16" style={springProps}>
            <div className="container">
                <div className="flex flex-col items-center ml:flex-row ml:justify-center ml:gap-20">
                    <div className="flex flex-col items-center text-center ml:items-start ml:text-start">
                        <Description title="The only Place to buy crypto at true cost" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." caption="DISCOVER THE APP" textCenter={false} />
                        <div className="my-10 flex items-center gap-5">
                            <a href="#">
                                <img className="w-28" src={AppStore} alt="img" />
                            </a>
                            <a href="#">
                                <img className="w-28" src={GooglePlay} alt="img" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <img className="w-48 md:w-60 xl:w-72" src={App} alt="img" />
                    </div>
                </div>
            </div>
        </animated.section>
    )
}
