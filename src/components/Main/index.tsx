import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { animated, useSpring } from '@react-spring/web'
import { MainList } from "./MainList"
import { useInView } from 'react-intersection-observer';
import { Number } from "components/Number"

export const Main: React.FC = () => {
    const [inViewRef, inView] = useInView({
        threshold: 0.1,
    });

    const springProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: inView ? 1 : 0 },
        config: {
            duration: 1000,
        },
    });

    return (
        <animated.section ref={inViewRef} className="my-16" style={springProps}>
            <div className="container">
                <div className="flex flex-col items-center gap-7 text-center">
                    <div className="flex flex-col items-center gap-7 max-w-xl">
                        <h1 className="text-5xl font-semibold leading-snug">Best place buy and sell crypto currency asset</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leonatoque penatibu.</p>
                        <a className="bg-global-color-green text-global-color-secondary translate-y-0 hover:bg-white hover:-translate-y-2 duration-300 ease-in py-2 font-medium text-sm max-w-xs w-full" href="#">Get Started</a>
                        <a className=" text-global-color-green translate-y-0 hover:text-white hover:-translate-y-2 duration-300 ease-in py-2 font-medium" href="#">
                            <FontAwesomeIcon className="rotate-90 mr-3" icon={faPlay} />
                            Watch Tutorials
                        </a>
                    </div>
                    <div className="flex flex-col gap-7 text-center mb-7 ml:flex-row">
                        <div className="ml-32 ml:ml-0">
                            <span className="mr-2 text-lg font-semibold"><Number n={750} />K+</span>
                            <span className="text-gray">User Active</span>
                        </div>
                        <div>
                            <span className="mr-2 text-lg font-semibold"><Number n={750} />K+</span>
                            <span className="text-gray">User Active</span>
                        </div>
                    </div>
                    <MainList />
                </div>
            </div>
        </animated.section>
    )
}
