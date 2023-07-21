import { Description } from "components/Description"
import { Button } from "components/UI/Button"
import {useSpring, animated} from '@react-spring/web'

export const Download:React.FC = () => {
    const springProps = useSpring({
        from:{x:1000, opacity:0},
        to:{x:0, opacity:1},
        config:{
            duration:700
        }
    })
    return (
        <animated.section className="mb-16" style={springProps}>
            <div className="container">
                <div className="flex flex-col items-center bg-global-color-secondary p-7 md:text-center">
                    <Description title="Buy, sell, & manage crypto" caption="DOWNLOAD APP" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorp." />
                    <Button>
                        Download App
                    </Button>
                </div>
            </div>
        </animated.section>
    )
}

