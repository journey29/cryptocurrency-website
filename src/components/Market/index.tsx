import { Description } from "components/Description"
import { Button } from "components/UI/Button"
import App from 'assets/images/market/App-2-576x1024.png'
import App02 from 'assets/images/market/App-5.jpg'
import { useSpring, animated } from '@react-spring/web'

export const Market: React.FC = () => {
    const springProps = useSpring({
        from: { x: 1000, opacity: 0 },
        to: { x: 0, opacity: 1 },
        config: {
            duration: 700
        }
    })

    return (
        <animated.section className="mb-16" style={springProps}>
            <div className="container">
                <div className="flex flex-col items-center text-center ml:flex-row ml:gap-20 ml:justify-center">
                    <div className="flex flex-col items-center text-center ml:items-end ml:text-right">
                        <Description text="Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo." title="Buy and Sell" caption="Market Prices" />
                        <Button>
                            Learn Now
                        </Button>
                    </div>
                    <div className="relative ml:-order-1">
                        <img className="w-56 xl:w-72" src={App} alt="img" />
                        <img className="absolute w-40 xl:w-56 bottom-1/2 translate-y-1/2" src={App02} alt="img" />
                    </div>
                </div>
            </div>
        </animated.section>
    )
}
